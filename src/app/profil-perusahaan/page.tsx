'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Fish,
  Waves,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Award,
  TrendingUp,
  Scale,
  Users,
  Building2,
  Menu,
  X,
  Wheat,
  Activity,
  Maximize2,
  Layers,
  Compass,
} from 'lucide-react';
import BioflocTank3D from '@/components/3d/BioflocTank3D';
import Card3D from '@/components/3d/Card3D';

export default function CompanyProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab3D, setActiveTab3D] = useState<'tank' | 'stats'>('tank');
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    interest: 'Ikan Konsumsi Segar (Lele / Nila)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);

  // Format pesan WhatsApp
  const text = `Halo Papap Fish Farm,%0A%0ASaya ingin memesan/berkonsultasi dengan detail berikut:%0A- *Nama/Usaha*: ${encodeURIComponent(contactForm.name)}%0A- *No. Telepon*: ${encodeURIComponent(contactForm.phone)}%0A- *Komoditas*: ${encodeURIComponent(contactForm.interest)}%0A- *Keterangan*: ${encodeURIComponent(contactForm.message)}`;

  // Nomor WhatsApp tujuan (Haji Anung Suryanto)
  const whatsappUrl = `https://wa.me/6282219456643?text=${text}`;

  // Buka WhatsApp di tab/aplikasi baru
  setTimeout(() => {
    window.open(whatsappUrl, '_blank');
    setSubmitted(false);
  }, 600);
};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-black">
      {/* 1. PUBLIC 3D NAVBAR */}
      <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-22 flex items-center justify-between">
          <Link href="/profil-perusahaan" className="flex items-center gap-3.5 group">
            <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg shadow-cyan-950/60 border border-cyan-500/30 group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="Papap Fish Farm Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block leading-tight">
                Papap Fish <span className="text-cyan-400 font-extrabold text-sm uppercase tracking-wider">Farm</span>
              </span>
              <span className="text-[11px] text-slate-400 font-semibold tracking-wide uppercase flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Budidaya Ikan Air Tawar 3D
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#beranda" className="hover:text-cyan-400 transition-colors">
              Beranda
            </a>
            <a href="#simulasi3d" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Simulasi 3D</span>
            </a>
            <a href="#tentang" className="hover:text-cyan-400 transition-colors">
              Tentang Kami
            </a>
            <a href="#produk" className="hover:text-cyan-400 transition-colors">
              Produk Ikan
            </a>
            <a href="#fasilitas" className="hover:text-cyan-400 transition-colors">
              Fasilitas Kolam
            </a>
            <a href="#kontak" className="hover:text-cyan-400 transition-colors">
              Kontak
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-600 to-teal-500 hover:from-cyan-500 hover:to-teal-400 text-slate-950 text-xs font-black rounded-xl shadow-lg shadow-cyan-900/40 transition-all transform hover:-translate-y-0.5"
            >
              <span>Dashboard Budidaya</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-5 space-y-3 shadow-2xl">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 py-1"
            >
              Beranda
            </a>
            <a
              href="#simulasi3d"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-cyan-400 py-1"
            >
              Simulasi Kolam 3D
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 py-1"
            >
              Tentang Kami
            </a>
            <a
              href="#produk"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 py-1"
            >
              Produk Ikan
            </a>
            <a
              href="#fasilitas"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 py-1"
            >
              Fasilitas Kolam
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-200 py-1"
            >
              Kontak
            </a>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 bg-cyan-500 text-slate-950 font-black text-xs rounded-xl shadow-lg mt-2"
            >
              Masuk ke Dashboard Manajemen
            </Link>
          </div>
        )}
      </header>

      {/* 2. 3D HERO SECTION */}
      <section id="beranda" className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-black uppercase tracking-wider shadow-lg shadow-cyan-950/50">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Teknologi Budidaya Air Tawar Modern 3D</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                Kualitas Ikan Segar Pilihan{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
                  Bersih Tanpa Bau Lumpur
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Selamat datang di <strong>Papap Fish Farm</strong>, dipimpin oleh <strong>Haji Anung Suryanto</strong>. Kami membudidayakan aneka komoditas ikan air tawar pilihan (lele, nila, gurame, patin) menggunakan ekosistem kolam bioflok tersirkulasi dengan pengawasan digital 3D.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#simulasi3d"
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 text-sm font-black rounded-2xl shadow-xl shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Activity className="w-4 h-4" />
                  <span>Jelajahi Kolam 3D Interaktif</span>
                </a>
                <a
                  href="#produk"
                  className="w-full sm:w-auto px-7 py-3.5 bg-slate-900/90 border border-slate-700 hover:bg-slate-800 text-white text-sm font-bold rounded-2xl shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Lihat Katalog Produk</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              {/* 3D Glass Badge Metrics */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                  <p className="font-black text-cyan-400 text-xl sm:text-2xl">100%</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Bebas Bau Lumpur</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                  <p className="font-black text-emerald-400 text-xl sm:text-2xl">&ge; 95%</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Survival Rate (SR)</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
                  <p className="font-black text-teal-300 text-xl sm:text-2xl">10+ Ton</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">Panen / Siklus</p>
                </div>
              </div>
            </div>

            {/* Right 3D Emblem Showcase */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* 3D Glowing Rings behind Logo */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="relative p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-6 transform hover:scale-[1.02] transition-transform">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-cyan-400" />
                      <span className="text-xs font-black uppercase tracking-wider text-slate-300">
                        Official Emblem & Identity
                      </span>
                    </div>
                    <span className="px-3 py-1 bg-cyan-950 text-cyan-300 text-xs font-bold rounded-full border border-cyan-800/50">
                      Terverifikasi SNI
                    </span>
                  </div>

                  {/* Logo Center Display with 3D Depth Frame */}
                  <div className="relative py-4 flex items-center justify-center">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-3xl bg-white p-3 shadow-2xl shadow-cyan-950 flex items-center justify-center border-4 border-cyan-500/30">
                      <img
                        src="/logo.png"
                        alt="Papap Fish Farm Emblem"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Farm Owner Info Box */}
                  <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1 text-center">
                    <p className="text-xs text-slate-400">Pemilik & Pengelola Farm:</p>
                    <p className="text-base font-black text-white">Haji Anung Suryanto</p>
                    <p className="text-xs text-cyan-400 font-semibold">Sentra Budidaya Ikan Air Tawar Nusantara</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIMULASI KOLAM 3D TANK INTERAKTIF */}
      <section id="simulasi3d" className="py-20 bg-slate-900/80 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-4 py-1.5 rounded-full border border-cyan-800">
              <Compass className="w-3.5 h-3.5" />
              <span>Teknologi WebGL 3D Tiga Dimensi</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Simulasi Interaktif Kolam Bioflok 3D
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Putar dan inspeksi secara 360 derajat visualisasi kolam terpal bulat bioflok Papap Fish Farm. Amati sirkulasi air tersirkulasi, pergerakan ikan air tawar, serta aerasi oksigen mikroba.
            </p>
          </div>

          {/* 3D Canvas Visualizer */}
          <div className="max-w-5xl mx-auto">
            <BioflocTank3D />
          </div>

          {/* 3D Features Legend */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto pt-4">
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold">
                <Waves className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Sirkulasi Bioflok Aktif</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bakteri heterotrof mengurai limbah amonia menjadi flok protein bernutrisi yang dimakan kembali oleh ikan secara alami.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Aerasi High-Pressure 24 Jam</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Diffuser mikro menjaga pasokan Dissolved Oxygen (DO) selalu di atas 5.5 mg/L untuk pertumbuhan ikan yang prima.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-sm">Central Drainase Anti Lumpur</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Konstruksi dasar kolam mengerucut ke lubang pembuangan tengah untuk menguras kotoran tanpa mengganggu biomassa ikan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TENTANG KAMI */}
      <section id="tentang" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-teal-400 bg-teal-950 px-3.5 py-1 rounded-full border border-teal-800">
              Tentang Papap Fish Farm
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Dedikasi Budidaya Ikan Air Tawar Berkualitas Unggul
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Diprakarsai oleh <strong>Haji Anung Suryanto</strong>, Papap Fish Farm berkomitmen menghadirkan pasokan ikan air tawar yang sehat, higienis, dan terpercaya bagi masyarakat luas, pengusaha kuliner, dan industri katering.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card3D className="bg-slate-900/90 border border-slate-800 p-6 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-950 text-cyan-400 flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white text-base">Higienis Tanpa Lumpur</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Ikan tidak bersentuhan dengan lumpur dasar tanah. Menghasilkan cita rasa daging manis alami, bersih, dan segar.
              </p>
            </Card3D>

            <Card3D className="bg-slate-900/90 border border-slate-800 p-6 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-950 text-teal-400 flex items-center justify-center font-black">
                <Wheat className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white text-base">Pakan Terkontrol SNI</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Bebas dari pakan limbah. Seluruh ikan mengonsumsi pelet bersertifikasi dengan suplemen probiotik alami.
              </p>
            </Card3D>

            <Card3D className="bg-slate-900/90 border border-slate-800 p-6 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-black">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white text-base">Sortir Ketat & Seragam</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Grading bobot dilakukan rutin sehingga ukuran ikan saat panen seragam sesuai kebutuhan restoran dan pasar.
              </p>
            </Card3D>

            <Card3D className="bg-slate-900/90 border border-slate-800 p-6 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-950 text-amber-400 flex items-center justify-center font-black">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-black text-white text-base">Kemitraan Pasokan Stabil</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Menjamin ketersediaan pasokan mingguan dan bulanan dengan kontrak kerja sama transparan dan harga bersaing.
              </p>
            </Card3D>
          </div>
        </div>
      </section>

      {/* 5. KATALOG PRODUK IKAN DENGAN 3D TILT CARDS */}
      <section id="produk" className="py-20 bg-slate-900/90 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-950 px-4 py-1.5 rounded-full border border-cyan-800">
              Katalog Komoditas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Produk Ikan Air Tawar Unggulan
            </h2>
            <p className="text-slate-400 text-sm">
              Tersedia dalam kondisi segar hidup langsung panen dari kolam budidaya terawat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Produk 1 */}
            <Card3D className="bg-slate-950 border border-slate-800 p-7 flex flex-col justify-between space-y-6" glowColor="rgba(6, 182, 212, 0.3)">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold border border-cyan-800">
                  <Fish className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white">Ikan Lele Konsumsi Segar</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Lele hasil budidaya bioflok modern. Daging kesat padat, rendah lemak, tidak berbau lumpur, dan sangat renyah saat digoreng.
                </p>
                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Ukuran Standar:</span>
                    <span className="font-bold text-white">Isi 6 - 8 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Ukuran Warung Pecel:</span>
                    <span className="font-bold text-white">Isi 8 - 10 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Kondisi Pengiriman:</span>
                    <span className="font-bold text-cyan-400">Segar Hidup / Bersih Fillet</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-3 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-black text-xs rounded-xl text-center block transition-all shadow-lg shadow-cyan-900/40"
              >
                Pesan Ikan Lele
              </a>
            </Card3D>

            {/* Produk 2 */}
            <Card3D className="bg-slate-950 border border-slate-800 p-7 flex flex-col justify-between space-y-6" glowColor="rgba(20, 184, 166, 0.3)">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-950 text-teal-400 flex items-center justify-center font-bold border border-teal-800">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white">Ikan Nila Merah & Nila Hitam</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ikan nila berkualitas tinggi dengan pertumbuhan bobot cepat, sisik cerah berkilau, dan daging tebal manis dari sirkulasi air teroksigenasi tinggi.
                </p>
                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Ukuran Konsumsi:</span>
                    <span className="font-bold text-white">Isi 3 - 5 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Varietas Unggul:</span>
                    <span className="font-bold text-white">Nila Merah Bangkok & Nila Hitam</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Target Pasar:</span>
                    <span className="font-bold text-teal-400">Restoran, Supermarket, Katering</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-3 bg-teal-600 hover:bg-teal-500 text-slate-950 font-black text-xs rounded-xl text-center block transition-all shadow-lg shadow-teal-900/40"
              >
                Pesan Ikan Nila
              </a>
            </Card3D>

            {/* Produk 3 */}
            <Card3D className="bg-slate-950 border border-slate-800 p-7 flex flex-col justify-between space-y-6" glowColor="rgba(245, 158, 11, 0.3)">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-950 text-amber-400 flex items-center justify-center font-bold border border-amber-800">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-white">Bibit & Benih Ikan Unggul</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bibit lele (Sangkuriang/Mutiara) dan bibit nila pilihan. Lincah, tahan fluktuasi cuaca, seragam, dan siap tebar dengan tingkat adaptasi prima.
                </p>
                <div className="space-y-2 text-xs text-slate-300 border-t border-slate-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Ukuran Benih:</span>
                    <span className="font-bold text-white">5-7 cm &bull; 7-9 cm &bull; 9-11 cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Grading Standar:</span>
                    <span className="font-bold text-white">Sortir Ketat Grade A</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Pengemasan:</span>
                    <span className="font-bold text-amber-400">Box Oksigen Siap Kirim</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-3 bg-amber-600 hover:bg-amber-500 text-slate-950 font-black text-xs rounded-xl text-center block transition-all shadow-lg shadow-amber-900/40"
              >
                Pesan Bibit Ikan
              </a>
            </Card3D>
          </div>
        </div>
      </section>

      {/* 6. FASILITAS KOLAM PETERNAKAN */}
      <section id="fasilitas" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-black uppercase tracking-wider text-teal-400 bg-teal-950 px-4 py-1.5 rounded-full border border-teal-800">
              Infrastruktur Modern
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Fasilitas Budidaya Papap Fish Farm
            </h2>
            <p className="text-slate-400 text-sm">
              Dibangun dengan standar akuakultur teruji untuk menjamin stabilitas ekosistem kolam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Kolam Bioflok D3 - D5</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rangka besi galvanis dengan terpal karet Orchid tahan cuaca dan central drainase sentral pembuangan endapan.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Roots Blower Aerasi</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Suplai oksigen mikro tanpa henti 24/7 menggunakan jaringan uniring diffuser di dasar kolam.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-950 text-emerald-400 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Laboratorium Kualitas Air</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Uji harian parameter Dissolved Oxygen (DO), pH digital, TDS, dan kepadatan flok bakteri secara saintifik.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-base">Karantina & Grading</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fasilitas aklimatisasi benih baru dan penyortiran ukuran berkala sebelum didistribusikan ke pelanggan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FORMULIR KONTAK & KEMITRAAN */}
      <section id="kontak" className="py-20 bg-slate-900/90 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Kontak */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-950 px-4 py-1.5 rounded-full border border-cyan-800">
                Hubungi Kami
              </span>
              <h2 className="text-3xl font-black text-white tracking-tight">
                Konsultasikan Kebutuhan Ikan & Kemitraan Pasokan
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Kami siap menjadi rekan pasokan ikan air tawar terpercaya. Silakan hubungi <strong>Haji Anung Suryanto</strong> dan staf pemasaran Papap Fish Farm.
              </p>

              <div className="space-y-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center flex-shrink-0 border border-cyan-800">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Lokasi Peternakan:</p>
                    <p className="text-slate-400 text-xs">
                      Sentra Budidaya Ikan Air Tawar Papap Fish Farm, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-950 text-teal-400 flex items-center justify-center flex-shrink-0 border border-teal-800">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Telepon & WhatsApp:</p>
                    <p className="text-slate-400 text-xs">+62 822-1945-6643 / Haji Anung Suryanto</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-950 text-blue-400 flex items-center justify-center flex-shrink-0 border border-blue-800">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Email Resmi:</p>
                    <p className="text-slate-400 text-xs">papapfishfarm@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-950 text-amber-400 flex items-center justify-center flex-shrink-0 border border-amber-800">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Jam Operasional & Kunjungan:</p>
                    <p className="text-slate-400 text-xs">Senin - Sabtu: 07.00 - 17.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulir 3D */}
            <div className="lg:col-span-7">
              <Card3D className="bg-slate-950 rounded-3xl p-8 border border-slate-800 shadow-2xl" glowColor="rgba(6, 182, 212, 0.25)">
                <h3 className="text-xl font-black text-white mb-1">Kirim Pesan / Permintaan Pasokan</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Isi formulir berikut dan tim kami akan menghubungi via WhatsApp dalam 1x24 jam.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Nama Lengkap / Nama Usaha *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="Contoh: RM Sari Rasa / Budi"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1">
                        Nomor WhatsApp / Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        placeholder="0812xxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Komoditas / Kebutuhan *
                    </label>
                    <select
                      value={contactForm.interest}
                      onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer"
                    >
                      <option value="Ikan Konsumsi Segar (Lele / Nila)">Ikan Lele Konsumsi Segar (Warung / Restoran)</option>
                      <option value="Ikan Nila Segar">Ikan Nila Konsumsi Segar (Merah / Hitam)</option>
                      <option value="Bibit Ikan Air Tawar">Bibit / Benih Ikan Air Tawar Unggul</option>
                      <option value="Kemitraan Suplai Rutin">Kemitraan Pasokan Grosir / Pasar Induk</option>
                      <option value="Lainnya">Konsultasi / Kunjungan Farm</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Pesan / Keterangan Kebutuhan
                    </label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-slate-900 border border-slate-800 text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="Tuliskan estimasi jumlah kebutuhan (misal: 100 kg/minggu) dan lokasi pengiriman..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-cyan-900/40 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitted ? 'Mengirimkan...' : 'Kirim Pesan Sekarang'}</span>
                  </button>
                </form>
              </Card3D>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FOOTER DENGAN LOGO RESMI */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white p-1.5 flex items-center justify-center shadow-lg border border-slate-800 flex-shrink-0">
                <img
                  src="/logo.png"
                  alt="Papap Fish Farm Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="font-black text-white text-base">Papap Fish Farm</h4>
                <p className="text-xs text-slate-400">Pusat Budidaya Ikan Air Tawar Bioflok & Pasokan Segar &bull; Pemilik: H. Anung Suryanto</p>
              </div>
            </div>

            <div className="flex items-center gap-5 text-xs font-bold">
              <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Dashboard Budidaya
              </Link>
              <Link href="/login" className="text-slate-300 hover:text-white transition-colors">
                Portal Pengelola
              </Link>
              <a href="#kontak" className="text-slate-300 hover:text-white transition-colors">
                Kontak WhatsApp
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 Papap Fish Farm. Seluruh hak cipta dilindungi.</p>
            <p>Dibangun untuk peternak ikan air tawar modern Indonesia 🇮🇩</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
