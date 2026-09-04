'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, RotateCw, Sparkles, Activity, Layers } from 'lucide-react';

export default function BioflocTank3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [autoRotate, setAutoRotate] = useState(true);
  const [waterStatus, setWaterStatus] = useState({
    oxygen: 6.2,
    temp: 28.5,
    ph: 7.4,
  });

  const controlsRef = useRef<{
    setCameraView: (type: 'iso' | 'top' | 'side') => void;
    toggleRotate: () => void;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a1526);
    scene.fog = new THREE.FogExp2(0x0a1526, 0.035);

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(7, 6, 8);
    camera.lookAt(0, 0, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xdff0ff, 0.9);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0x00ffff, 2.0);
    mainLight.position.set(6, 12, 6);
    mainLight.castShadow = true;
    scene.add(mainLight);

    const sunLight = new THREE.DirectionalLight(0xfff3d1, 1.5);
    sunLight.position.set(-6, 8, -6);
    scene.add(sunLight);

    const underWaterLight = new THREE.PointLight(0x00e1d9, 3.5, 8);
    underWaterLight.position.set(0, 0, 0);
    scene.add(underWaterLight);

    // Group for the entire Tank
    const tankGroup = new THREE.Group();
    scene.add(tankGroup);

    // 4. Tank Components (Kolam Bioflok Bulat D3)
    const tankRadius = 3.2;
    const tankHeight = 2.4;

    // Tank Wall (Liner Terpal Biru)
    const wallGeo = new THREE.CylinderGeometry(tankRadius, tankRadius, tankHeight, 48, 1, true);
    const wallMat = new THREE.MeshStandardMaterial({
      color: 0x034780,
      roughness: 0.3,
      metalness: 0.1,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const tankWall = new THREE.Mesh(wallGeo, wallMat);
    tankWall.position.y = tankHeight / 2;
    tankWall.receiveShadow = true;
    tankGroup.add(tankWall);

    // Tank Base / Floor
    const floorGeo = new THREE.CircleGeometry(tankRadius, 48);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x022543,
      roughness: 0.7,
    });
    const tankFloor = new THREE.Mesh(floorGeo, floorMat);
    tankFloor.rotation.x = -Math.PI / 2;
    tankFloor.position.y = 0.02;
    tankFloor.receiveShadow = true;
    tankGroup.add(tankFloor);

    // Metal Frame Rings (Rangka Besi Pipa Bioflok)
    const ringGeo = new THREE.TorusGeometry(tankRadius + 0.04, 0.05, 12, 48);
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.85,
      roughness: 0.25,
    });

    [0.2, 1.2, 2.35].forEach((yPos) => {
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.y = yPos;
      tankGroup.add(ring);
    });

    // Vertical Frame Pipes
    const vertPipeGeo = new THREE.CylinderGeometry(0.04, 0.04, tankHeight + 0.1, 12);
    for (let i = 0; i < 16; i++) {
      const angle = (i / 16) * Math.PI * 2;
      const pipe = new THREE.Mesh(vertPipeGeo, ringMat);
      pipe.position.x = Math.cos(angle) * (tankRadius + 0.04);
      pipe.position.z = Math.sin(angle) * (tankRadius + 0.04);
      pipe.position.y = (tankHeight + 0.1) / 2;
      tankGroup.add(pipe);
    }

    // Water Surface with animation
    const waterRadius = tankRadius - 0.05;
    const waterGeo = new THREE.CylinderGeometry(waterRadius, waterRadius, tankHeight - 0.2, 48, 1);
    const waterMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.1,
      metalness: 0.1,
      transparent: true,
      opacity: 0.6,
    });
    const waterBody = new THREE.Mesh(waterGeo, waterMat);
    waterBody.position.y = (tankHeight - 0.2) / 2;
    tankGroup.add(waterBody);

    // Aerator Diffuser in Center
    const aeratorGeo = new THREE.CylinderGeometry(0.5, 0.6, 0.2, 24);
    const aeratorMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      roughness: 0.5,
    });
    const aerator = new THREE.Mesh(aeratorGeo, aeratorMat);
    aerator.position.y = 0.1;
    tankGroup.add(aerator);

    // 5. Bubbles Particle System (Gelembung Aerasi Oksigen)
    const bubbleCount = 180;
    const bubbleGeo = new THREE.BufferGeometry();
    const bubblePositions = new Float32Array(bubbleCount * 3);
    const bubbleSpeeds = new Float32Array(bubbleCount);

    for (let i = 0; i < bubbleCount; i++) {
      const r = Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      bubblePositions[i * 3] = Math.cos(theta) * r;
      bubblePositions[i * 3 + 1] = Math.random() * 2.1;
      bubblePositions[i * 3 + 2] = Math.sin(theta) * r;
      bubbleSpeeds[i] = 0.02 + Math.random() * 0.03;
    }

    bubbleGeo.setAttribute('position', new THREE.BufferAttribute(bubblePositions, 3));

    const bubbleMat = new THREE.PointsMaterial({
      color: 0xe0f2fe,
      size: 0.09,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const bubbleParticles = new THREE.Points(bubbleGeo, bubbleMat);
    tankGroup.add(bubbleParticles);

    // 6. 3D Swimming Fish (Kawanan Ikan Berenang Berputar)
    const fishCount = 14;
    const fishGroup = new THREE.Group();
    tankGroup.add(fishGroup);

    interface FishData {
      mesh: THREE.Group;
      radius: number;
      angle: number;
      speed: number;
      y: number;
      tail: THREE.Mesh;
    }

    const fishList: FishData[] = [];

    // Construct simple stylized 3D fish
    for (let i = 0; i < fishCount; i++) {
      const fish = new THREE.Group();

      // Body (smooth elongated cone/capsule)
      const bodyGeo = new THREE.ConeGeometry(0.1, 0.45, 8);
      bodyGeo.rotateX(Math.PI / 2);
      const isLele = i % 2 === 0;
      const bodyMat = new THREE.MeshStandardMaterial({
        color: isLele ? 0x1e3a8a : 0x0284c7, // dark blue lele or bright nila
        roughness: 0.3,
        metalness: 0.2,
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      fish.add(bodyMesh);

      // Tail fin
      const tailGeo = new THREE.ConeGeometry(0.08, 0.18, 4);
      tailGeo.rotateX(-Math.PI / 2);
      const tailMat = new THREE.MeshStandardMaterial({
        color: isLele ? 0x38bdf8 : 0x7dd3fc,
        transparent: true,
        opacity: 0.8,
      });
      const tailMesh = new THREE.Mesh(tailGeo, tailMat);
      tailMesh.position.z = -0.3;
      fish.add(tailMesh);

      const radius = 1.0 + Math.random() * 1.7;
      const angle = (i / fishCount) * Math.PI * 2 + Math.random() * 0.5;
      const y = 0.4 + Math.random() * 1.5;
      const speed = (0.012 + Math.random() * 0.015) * (i % 2 === 0 ? 1 : 1.1);

      fish.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      fishGroup.add(fish);

      fishList.push({
        mesh: fish,
        radius,
        angle,
        speed,
        y,
        tail: tailMesh,
      });
    }

    // 7. Ground Pedestal (Lantai Paving Peternakan)
    const groundGeo = new THREE.CylinderGeometry(tankRadius + 1.2, tankRadius + 1.5, 0.2, 48);
    const groundMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.8,
    });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    tankGroup.add(ground);

    // 8. Interaction & Mouse Drag Controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let rotateSpeed = 0.005;

    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - previousMousePosition.x;
      const deltaY = e.clientY - previousMousePosition.y;

      tankGroup.rotation.y += deltaX * rotateSpeed;
      camera.position.y = THREE.MathUtils.clamp(camera.position.y + deltaY * 0.02, 2, 12);
      camera.lookAt(0, 1, 0);

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.y;

      tankGroup.rotation.y += deltaX * rotateSpeed * 1.5;
      camera.position.y = THREE.MathUtils.clamp(camera.position.y + deltaY * 0.03, 2, 12);
      camera.lookAt(0, 1, 0);

      previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    container.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    container.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    // Expose control helper
    controlsRef.current = {
      setCameraView: (type: 'iso' | 'top' | 'side') => {
        if (type === 'iso') {
          camera.position.set(7, 6, 8);
        } else if (type === 'top') {
          camera.position.set(0.1, 10, 0.1);
        } else if (type === 'side') {
          camera.position.set(0, 2.5, 9);
        }
        camera.lookAt(0, 1, 0);
      },
      toggleRotate: () => {
        setAutoRotate((prev) => !prev);
      },
    };

    // 9. Resize handler
    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth;
      const newH = container.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };
    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Auto rotation
      if (autoRotate && !isDragging) {
        tankGroup.rotation.y += 0.004;
      }

      // Water ripple oscillation
      waterBody.scale.y = 1 + Math.sin(elapsedTime * 2.5) * 0.015;

      // Animate bubbles rising
      const posAttr = bubbleGeo.attributes.position as THREE.BufferAttribute;
      const positions = posAttr.array as Float32Array;
      for (let i = 0; i < bubbleCount; i++) {
        positions[i * 3 + 1] += bubbleSpeeds[i];
        if (positions[i * 3 + 1] > tankHeight - 0.2) {
          positions[i * 3 + 1] = 0.15;
        }
      }
      posAttr.needsUpdate = true;

      // Animate swimming fish
      fishList.forEach((fish, idx) => {
        fish.angle += fish.speed;
        const x = Math.cos(fish.angle) * fish.radius;
        const z = Math.sin(fish.angle) * fish.radius;
        fish.mesh.position.x = x;
        fish.mesh.position.z = z;

        // Tangent orientation (face swimming direction)
        fish.mesh.rotation.y = -fish.angle + Math.PI / 2;

        // Undulating swimming tail wag
        fish.tail.rotation.y = Math.sin(elapsedTime * 8 + idx) * 0.45;
        fish.mesh.position.y = fish.y + Math.sin(elapsedTime * 2 + idx) * 0.06;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] lg:h-[620px] rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 border border-slate-700/80 shadow-2xl">
      {/* Three.js Canvas Container */}
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D Overlay Badges & Interactive Controls */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex flex-col gap-2 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-xs font-bold shadow-lg">
          <Activity className="w-4 h-4 animate-pulse text-cyan-400" />
          <span>Simulasi Kolam Bioflok 3D Interaktif</span>
        </div>
        <p className="text-[11px] text-slate-400 pl-1">
          Sentuh / drag mouse untuk memutar 360&deg;
        </p>
      </div>

      {/* Floating 3D Telemetry Gauges */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex flex-col gap-2 pointer-events-none">
        <div className="px-3.5 py-2 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-right shadow-xl">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Oksigen (DO)</p>
          <p className="text-sm font-black text-emerald-400">{waterStatus.oxygen} mg/L <span className="text-[10px] text-emerald-300 font-normal">(Optimal)</span></p>
        </div>
        <div className="px-3.5 py-2 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-right shadow-xl">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Suhu Air</p>
          <p className="text-sm font-black text-teal-300">{waterStatus.temp} &deg;C</p>
        </div>
        <div className="px-3.5 py-2 rounded-2xl bg-slate-900/85 backdrop-blur-md border border-slate-700/60 text-right shadow-xl">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">Kadar pH</p>
          <p className="text-sm font-black text-cyan-300">{waterStatus.ph}</p>
        </div>
      </div>

      {/* Camera Control Bar */}
      <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2 bg-slate-900/85 backdrop-blur-md p-1.5 rounded-2xl border border-slate-700 shadow-xl">
          <button
            onClick={() => controlsRef.current?.setCameraView('iso')}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Sudut Isometrik
          </button>
          <button
            onClick={() => controlsRef.current?.setCameraView('top')}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Atas (Top)
          </button>
          <button
            onClick={() => controlsRef.current?.setCameraView('side')}
            className="px-3 py-1.5 rounded-xl text-xs font-bold text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
          >
            Samping
          </button>
        </div>

        <button
          onClick={() => {
            setAutoRotate(!autoRotate);
          }}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold border shadow-xl backdrop-blur-md transition-all ${
            autoRotate
              ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300'
              : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-white'
          }`}
        >
          <RotateCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
          <span className="hidden sm:inline">{autoRotate ? 'Rotasi Aktif' : 'Rotasi Manual'}</span>
        </button>
      </div>
    </div>
  );
}
