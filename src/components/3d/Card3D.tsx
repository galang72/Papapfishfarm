'use client';

import React, { useRef, useState } from 'react';

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function Card3D({ children, className = '', glowColor = 'rgba(14, 165, 233, 0.25)' }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -12; // tilt angle
    const rotateY = ((x - centerX) / centerX) * 12;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: '1000px' }}
      className="w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: isHovered
            ? `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(15px)`
            : 'rotateX(0deg) rotateY(0deg) translateZ(0px)',
          transition: isHovered ? 'transform 0.08s ease-out' : 'transform 0.5s ease-out',
          boxShadow: isHovered
            ? `0 25px 50px -12px ${glowColor}, 0 0 25px ${glowColor}`
            : '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        }}
        className={`relative transition-shadow duration-300 rounded-3xl will-change-transform ${className}`}
      >
        {children}

        {/* Specular 3D Reflection overlay */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none opacity-40 bg-gradient-to-tr from-white/10 via-white/30 to-transparent"
            style={{
              transform: 'translateZ(30px)',
            }}
          />
        )}
      </div>
    </div>
  );
}
