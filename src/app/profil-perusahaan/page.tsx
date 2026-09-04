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
} from 'lucide-react';

export default function CompanyProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    interest: 'Lele Konsumsi Segar',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactForm({
        name: '',
        phone: '',
        interest: 'Lele Konsumsi Segar',
        message: '',
      });
      alert('Terima kasih! Tim LeleFarm akan segera menghubungi Anda.');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-emerald-500 selection:text-white">
      {/* 1. PUBLIC NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/profil-perusahaan" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-700/20 group-hover:scale-105 transition-transform">
              <Fish className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-slate-900 block leading-tight">
                LeleFarm <span className="text-emerald-600 font-extrabold text-sm uppercase">Nusantara</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                Modern Biofloc Aquaculture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#beranda" className="hover:text-emerald-600 transition-colors">
              Beranda
            </a>
            <a href="#tentang" className="hover:text-emerald-600 transition-colors">
              Tentang Kami
            </a>
            <a href="#produk" className="hover:text-emerald-600 transition-colors">
              Produk & Layanan
            </a>
            <a href="#keunggulan" className="hover:text-emerald-600 transition-colors">
              Teknologi Bioflok
            </a>
            <a href="#kontak" className="hover:text-emerald-600 transition-colors">
              Kontak
            </a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl shadow-sm transition-all"
            >
              <span>Dashboard Manajemen</span>
              <ArrowRight className="w-4 h-4 text-emerald-400" />
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
            <a
              href="#beranda"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-1"
            >
              Beranda
            </a>
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-1"
            >
              Tentang Kami
            </a>
            <a
              href="#produk"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-1"
            >
              Produk & Layanan
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-1"
            >
              Teknologi Bioflok
            </a>
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-1"
            >
              Kontak
            </a>
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-sm"
            >
              Masuk ke Dashboard Manajemen
            </Link>
          </div>
        )}
      </header>

      {/* 2. HERO SECTION */}
      <section id="beranda" className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-emerald-50/50 via-teal-50/20 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Peternakan Ikan Lele Bioflok Berkelanjutan</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Penyedia Ikan Lele Segar & Bibit Unggul{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Higienis Tanpa Bau Lumpur
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Kami membudidayakan ikan lele berkualitas premium menggunakan sistem bioflok tersirkulasi.
                Daging padat, gurih, bebas residu antibiotik, dan siap memasok kebutuhan restoran, pecel lele,
                serta pasar modern secara stabil sepanjang tahun.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <a
                  href="#produk"
                  className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-2xl shadow-lg shadow-emerald-700/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Pesan Ikan & Kemitraan</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/"
                  className="w-full sm:w-auto px-6 py-3.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 text-sm font-bold rounded-2xl shadow-sm transition-all text-center flex items-center justify-center gap-2"
                >
                  <Building2 className="w-4 h-4 text-slate-500" />
                  <span>Sistem Manajemen Budidaya</span>
                </Link>
              </div>

              {/* Badges Keunggulan */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
                <div className="text-left">
                  <p className="font-extrabold text-slate-900 text-lg sm:text-2xl">100%</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Bebas Bau Lumpur</p>
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-slate-900 text-lg sm:text-2xl">&ge; 95%</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Tingkat Hidup (SR)</p>
                </div>
                <div className="text-left">
                  <p className="font-extrabold text-slate-900 text-lg sm:text-2xl">5+ Ton</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Kapasitas Panen</p>
                </div>
              </div>
            </div>

            {/* Visual Hero Card */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-teal-400 rounded-3xl blur-xl opacity-30 animate-pulse" />
                <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center">
                        <Waves className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm">Biofloc Farm Monitor</h4>
                        <p className="text-xs text-slate-400">Status Kolam Pembesaran</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full">
                      Kolam Aktif
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Sistem Budidaya:</span>
                      <span className="font-bold text-slate-900">Bioflok High-Density Aeration</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Kualitas Air (pH & DO):</span>
                      <span className="font-bold text-teal-600">Optimal (pH 7.2 | DO 5.8 mg/L)</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Pakan Harian:</span>
                      <span className="font-bold text-emerald-700">Pelet Standar SNI Protein &ge; 32%</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Jaminan Panen:</span>
                      <span className="font-bold text-slate-900">Ukuran Seragam & Segar Hidup</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950 text-white flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                        Pemesanan Pasokan Rutin
                      </p>
                      <p className="text-sm font-bold mt-0.5">Mulai dari 50 kg hingga 2 Ton</p>
                    </div>
                    <a
                      href="#kontak"
                      className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-sm transition-all"
                    >
                      Hubungi Kami
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TENTANG KAMI */}
      <section id="tentang" className="py-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
              Tentang Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Dedikasi untuk Budidaya Lele Modern yang Sehat, Higienis, dan Menguntungkan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              LeleFarm Nusantara adalah peternakan akuakultur air tawar berbasis sains dan teknologi digital.
              Kami mengubah stigma budidaya lele konvensional menjadi peternakan berstandar tinggi dengan sistem bioflok terpadu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Higienis & Tanpa Lumpur</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kolam terpal bioflok bundar dengan drainase sentral (central drain) memastikan kotoran terbuang rutin, menghasilkan daging bersih tanpa bau tanah.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Wheat className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Pakan Terkontrol SNI</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Tidak menggunakan bangkai atau limbah. Lele hanya diberi pakan pelet apung berkualitas dengan suplementasi probiotik EM4 dan vitamin alami.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Sortir Ketat & Seragam</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Penyortiran ukuran dilakukan setiap 2-3 minggu, mencegah kanibalisme dan memastikan ukuran lele saat panen presisi sesuai pesanan konsumen.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Kemitraan Terpercaya</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kami siap menjadi rekan pasokan jangka panjang untuk pengusaha kuliner pecel lele, pasar induk, katering, dan supermarket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUK & LAYANAN KAMI */}
      <section id="produk" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-2xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-600 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">
              Katalog Produk
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Produk & Layanan Unggulan LeleFarm
            </h2>
            <p className="text-slate-600 text-sm">
              Kualitas ikan segar pilihan untuk konsumsi dan pembudidaya lele di seluruh nusantara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Produk 1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                  <Fish className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ikan Lele Konsumsi Segar</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ikan lele segar hidup dipanen langsung dari kolam bioflok bersih. Daging kesat padat, tidak lembek, dan bebas rasa lumpur.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Ukuran Standar:</span>
                    <span className="font-bold text-slate-900">Isi 6 - 8 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ukuran Pecel Lele:</span>
                    <span className="font-bold text-slate-900">Isi 8 - 10 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kondisi Kirim:</span>
                    <span className="font-bold text-emerald-600">Segar Hidup / Bersih Fillet</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center block transition-colors"
              >
                Pesan Pasokan Konsumsi
              </a>
            </div>

            {/* Produk 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Bibit / Benih Lele Unggul</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Benih strain Sangkuriang dan Mutiara bersertifikasi. Nafsu makan tinggi, tahan perubahan cuaca, dan pertumbuhan bobot cepat.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Ukuran Benih:</span>
                    <span className="font-bold text-slate-900">5-7 cm &bull; 7-9 cm &bull; 9-11 cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Strain Bibit:</span>
                    <span className="font-bold text-slate-900">Lele Mutiara & Sangkuriang</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Minimal Order:</span>
                    <span className="font-bold text-teal-600">1.000 Ekor (Siap Kirim Box)</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl text-center block transition-colors"
              >
                Pesan Bibit Lele
              </a>
            </div>

            {/* Produk 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Paket Instalasi Bioflok</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Layanan perakitan kolam bioflok terpal bundar lengkap, sistem aerasi turbo, pakan awal, starter probiotik, dan pendampingan SOP hingga panen raya.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Ukuran Kolam:</span>
                    <span className="font-bold text-slate-900">Diameter D2, D3, D4, D5</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Paket Termasuk:</span>
                    <span className="font-bold text-slate-900">Blower, Pipa, Rangka Besi, Terpal</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pendampingan:</span>
                    <span className="font-bold text-amber-600">SOP Budidaya & Konsultasi 24/7</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl text-center block transition-colors"
              >
                Konsultasi Pembuatan Kolam
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEKNOLOGI BIOFLOK */}
      <section id="keunggulan" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                Sains & Teknologi Budidaya
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Mengapa Memilih Ikan Lele Sistem Bioflok?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Bioflok adalah teknologi pemanfaatan mikroorganisme (bakteri heterotrof baik) yang mengubah
                senyawa amonia dan limbah sisa pakan menjadi gumpalan nutrisi (*flok*) yang kaya protein,
                sehingga dapat dimakan kembali oleh ikan lele.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-teal-500/20 text-teal-400 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Efisiensi Pakan Maksimal (FCR Rendah)</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Nilai FCR mencapai 0.9 - 1.1, jauh lebih hemat dibanding kolam tanah konvensional (FCR 1.3 - 1.5).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-teal-500/20 text-teal-400 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Hemat Air & Ramah Lingkungan</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Air tidak perlu dikuras setiap minggu. Sirkulasi flok aktif menjaga air tetap bersih tanpa bau menyengat.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-teal-500/20 text-teal-400 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Kualitas Daging Sehat & Tidak Bau Tanah</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Karena tidak bersentuhan dengan lumpur dasar kolam, daging lele memiliki cita rasa manis alami, gurih, dan higienis.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 space-y-6">
              <h3 className="font-bold text-base text-white border-b border-slate-700 pb-3 flex items-center justify-between">
                <span>Perbandingan Bioflok vs Kolam Tanah</span>
                <span className="text-xs text-teal-400 font-semibold">Uji Laboratorium</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Efisiensi Pakan (FCR)</span>
                    <span className="text-teal-400 font-bold">Bioflok: 1.05 | Tanah: 1.45</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Tingkat Kelangsungan Hidup (SR)</span>
                    <span className="text-emerald-400 font-bold">Bioflok: 95% | Tanah: 75%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Kebersihan & Higienitas Daging</span>
                    <span className="text-cyan-400 font-bold">Bioflok: 100% Higienis</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-400 text-xs">
                💡 <strong className="text-white">Didukung Sistem Manajemen Digital:</strong> Seluruh kolam kami
                tercatat secara harian di aplikasi sistem budidaya, menjamin transparansi riwayat pakan dan panen.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FORMULIR KONTAK & LOKASI */}
      <section id="kontak" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Info Kontak */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Hubungi Kami
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Konsultasikan Kebutuhan Ikan & Kemitraan Anda
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kami melayani pesanan lele konsumsi harian/mingguan, pengadaan benih lele partai besar, serta
                kemitraan pembudidaya. Silakan hubungi kami atau kunjungi lokasi peternakan.
              </p>

              <div className="space-y-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Lokasi Peternakan Farm:</p>
                    <p className="text-slate-500 text-xs">
                      Jl. Agrobisnis Mina Mandiri No. 88, Sentra Akuakultur, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Telepon & WhatsApp Pemesanan:</p>
                    <p className="text-slate-500 text-xs">+62 812-3456-7890 / (021) 8899-2345</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Email Resmi:</p>
                    <p className="text-slate-500 text-xs">kontak@lelefarm.id</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Jam Operasional & Kunjungan:</p>
                    <p className="text-slate-500 text-xs">Senin - Sabtu: 07.00 - 17.00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulir */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Kirim Pesan / Permintaan Pasokan</h3>
                <p className="text-xs text-slate-500 mb-6">
                  Isi formulir berikut dan staf pemasaran kami akan menghubungi via WhatsApp dalam 1x24 jam.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Lengkap / Usaha *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Contoh: RM Pecel Lele Makmur"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nomor WhatsApp / Telepon *
                      </label>
                      <input
                        type="tel"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="0812xxxxxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Kebutuhan / Minat *
                    </label>
                    <select
                      value={contactForm.interest}
                      onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    >
                      <option value="Lele Konsumsi Segar">Lele Konsumsi Segar (Restoran / Warung)</option>
                      <option value="Bibit / Benih Lele">Bibit / Benih Lele (Sangkuriang &bull; Mutiara)</option>
                      <option value="Paket Pembuatan Kolam Bioflok">Paket Instalasi Kolam Bioflok Terpal</option>
                      <option value="Kemitraan Suplai Grosir">Kemitraan Suplai Grosir / Pasar Induk</option>
                      <option value="Lainnya">Konsultasi / Pertanyaan Lainnya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Pesan / Keterangan Kebutuhan
                    </label>
                    <textarea
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      placeholder="Tuliskan estimasi jumlah kebutuhan (misal: 100 kg/minggu) dan lokasi pengiriman..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitted ? 'Mengirimkan...' : 'Kirim Pesan Sekarang'}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <Fish className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base">LeleFarm Nusantara</h4>
                <p className="text-xs text-slate-400">Pusat Budidaya Lele Bioflok & Pasokan Segar Terpercaya</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold">
              <Link href="/" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                Dashboard Budidaya
              </Link>
              <Link href="/login" className="text-slate-300 hover:text-white transition-colors">
                Portal Pengelola
              </Link>
              <a href="#kontak" className="text-slate-300 hover:text-white transition-colors">
                Kontak Pemasaran
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; 2026 LeleFarm Nusantara Management. Seluruh hak cipta dilindungi.</p>
            <p>Dibangun untuk peternak lele modern Indonesia 🇮🇩</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
