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
    interest: 'Ikan Konsumsi Segar (Lele / Nila)',
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
        interest: 'Ikan Konsumsi Segar (Lele / Nila)',
        message: '',
      });
      alert('Terima kasih! Tim Papap Fish Farm akan segera menghubungi Anda.');
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
                Papap Fish <span className="text-emerald-600 font-extrabold text-sm uppercase">Farm</span>
              </span>
              <span className="text-[11px] text-slate-500 font-medium tracking-wide uppercase">
                Budidaya Ikan Air Tawar Modern
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
              Produk Ikan
            </a>
            <a href="#keunggulan" className="hover:text-emerald-600 transition-colors">
              Teknologi Kolam
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
              Produk Ikan
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 py-1"
            >
              Teknologi Kolam
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
                <span>Pusat Budidaya Ikan Air Tawar Berkelanjutan</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight">
                Penyedia Ikan Air Tawar Segar & Bibit Unggul{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                  Higienis Tanpa Bau Lumpur
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                <strong>Papap Fish Farm</strong> dipimpin oleh <strong>Haji Anung Suryanto</strong>, membudidayakan komoditas ikan air tawar pilihan (ikan lele, nila, gurame, dan patin) dengan teknologi bioflok dan sirkulasi air bersih. Menghasilkan ikan berdaging padat, gurih, dan siap memasok kebutuhan restoran, pasar, serta rumah tangga.
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
                  <p className="font-extrabold text-slate-900 text-lg sm:text-2xl">10+ Ton</p>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">Kapasitas Panen Farm</p>
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
                        <h4 className="font-bold text-slate-900 text-sm">Papap Fish Farm Monitor</h4>
                        <p className="text-xs text-slate-400">Pengelola: H. Anung Suryanto</p>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full">
                      Farm Aktif
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Komoditas Utama:</span>
                      <span className="font-bold text-slate-900">Lele, Nila Merah, Gurame, Patin</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Teknologi Budidaya:</span>
                      <span className="font-bold text-teal-600">Bioflok & Sirkulasi Aerasi Intensif</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Standar Pakan:</span>
                      <span className="font-bold text-emerald-700">Pelet SNI + Suplemen Probiotik Alami</span>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center">
                      <span className="text-slate-600 font-medium">Jaminan Kualitas:</span>
                      <span className="font-bold text-slate-900">Higienis, Segar Hidup, Bersih</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-950 text-white flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold">
                        Pemesanan Pasokan Rutin
                      </p>
                      <p className="text-sm font-bold mt-0.5">Partai Kecil & Kontrak Pasokan Besar</p>
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
              Profil Peternakan
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Dedikasi untuk Budidaya Ikan Air Tawar yang Sehat, Higienis, dan Profesional
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              <strong>Papap Fish Farm</strong> didirikan oleh <strong>Haji Anung Suryanto</strong> dengan komitmen menghadirkan produk perikanan air tawar berkualitas unggul. Melalui penerapan teknologi budidaya modern, manajemen pakan presisi, dan pencatatan digital terpadu, kami menghasilkan pasokan ikan yang sehat, segar, dan ramah lingkungan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Higienis & Tanpa Bau Lumpur</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Kolam terpal dan bioflok bundar dengan drainase sentral (central drain) memastikan endapan terbuang rutin, menghasilkan daging ikan bersih bebas bau tanah.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Wheat className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Pakan Terkontrol SNI</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Hanya menggunakan pakan pelet apung bersertifikasi dengan nutrisi berimbang serta suplementasi probiotik alami untuk kesehatan pencernaan ikan.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <Scale className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Sortir Ketat & Seragam</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Penyortiran ukuran dilakukan secara berkala demi menjaga keseragaman bobot dan ukuran saat panen sesuai spesifikasi mitra restoran dan pasar.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-base">Kemitraan Pasokan Stabil</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Menjadi rekan pasokan terpercaya bagi pelaku usaha kuliner, rumah makan, pasar induk, katering, serta distributor ikan air tawar.
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
              Katalog Produk Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Komoditas Ikan Air Tawar Papap Fish Farm
            </h2>
            <p className="text-slate-600 text-sm">
              Tersedia dalam kondisi segar hidup langsung panen maupun benih siap tebar.
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
                  Lele hasil budidaya bioflok bersih. Daging kesat padat, tidak berlemak berlebih, tidak bau tanah, dan disukai pelanggan kuliner.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Ukuran Standar:</span>
                    <span className="font-bold text-slate-900">Isi 6 - 8 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ukuran Warung Pecel:</span>
                    <span className="font-bold text-slate-900">Isi 8 - 10 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Kondisi Kirim:</span>
                    <span className="font-bold text-emerald-600">Segar Hidup / Bersih</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl text-center block transition-colors"
              >
                Pesan Ikan Lele
              </a>
            </div>

            {/* Produk 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Ikan Nila Merah & Nila Hitam</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Ikan nila berkualitas tinggi dengan pertumbuhan cepat, daging tebal manis alami, dan sisik bersih dari kolam air mengalir beroksigen tinggi.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Ukuran Konsumsi:</span>
                    <span className="font-bold text-slate-900">Isi 3 - 5 ekor / kg</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Varietas:</span>
                    <span className="font-bold text-slate-900">Nila Merah Bangkok & Nila Hitam</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Target Pasar:</span>
                    <span className="font-bold text-teal-600">Restoran, Katering, Pasar Segar</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs rounded-xl text-center block transition-colors"
              >
                Pesan Ikan Nila
              </a>
            </div>

            {/* Produk 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Bibit & Benih Ikan Unggul</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Benih lele (Sangkuriang/Mutiara) dan benih nila pilihan. Lincah, tahan penyakit, seragam, dan siap tebar dengan tingkat adaptasi prima.
                </p>
                <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                  <div className="flex justify-between">
                    <span>Ukuran Bibit:</span>
                    <span className="font-bold text-slate-900">5-7 cm &bull; 7-9 cm &bull; 9-11 cm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grading Kualitas:</span>
                    <span className="font-bold text-slate-900">Sortir Ketat Grade A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pengemasan:</span>
                    <span className="font-bold text-amber-600">Kantong Oksigen Bergaransi</span>
                  </div>
                </div>
              </div>
              <a
                href="#kontak"
                className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl text-center block transition-colors"
              >
                Pesan Bibit Ikan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEKNOLOGI BUDIDAYA */}
      <section id="keunggulan" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-400 bg-teal-950 px-3 py-1 rounded-full border border-teal-800">
                Sains & Teknologi Budidaya Air Tawar
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Mengapa Memilih Ikan Air Tawar dari Papap Fish Farm?
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Kami menerapkan sistem budidaya ramah lingkungan dengan sirkulasi aerasi oksigen terlarut tinggi, pemanfaatan mikroba probiotik pengurai limbah, serta pemantauan kualitas air harian.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-teal-500/20 text-teal-400 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Efisiensi Pakan Maksimal (FCR Rendah)</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Rasio konversi pakan terkontrol optimal (FCR 1.0 - 1.1), menghasilkan pertumbuhan bobot ikan secara efektif dan hemat pakan.
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
                      Pengolahan air sirkulasi menjaga parameter lingkungan kolam tetap higienis tanpa menimbulkan polusi atau aroma tidak sedap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 p-1 bg-teal-500/20 text-teal-400 rounded-lg">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Daging Bersih, Higienis & Manis Alami</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Bebas dari rasa atau bau tanah/lumpur karena ikan dipelihara di kolam terpal bersih berdrainase tengah teratur.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Diagram */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 space-y-6">
              <h3 className="font-bold text-base text-white border-b border-slate-700 pb-3 flex items-center justify-between">
                <span>Perbandingan Kolam Modern vs Kolam Tanah Tradisional</span>
                <span className="text-xs text-teal-400 font-semibold">Papap Fish Farm</span>
              </h3>

              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Efisiensi Pakan (FCR)</span>
                    <span className="text-teal-400 font-bold">Papap Farm: 1.03 | Tradisional: 1.45</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-400 rounded-full w-[85%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Tingkat Kelangsungan Hidup (SR)</span>
                    <span className="text-emerald-400 font-bold">Papap Farm: 95% | Tradisional: 75%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 rounded-full w-[95%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1 text-slate-300">
                    <span>Kebersihan & Kualitas Daging</span>
                    <span className="text-cyan-400 font-bold">100% Bebas Bau Lumpur</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-400 rounded-full w-[100%]" />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-400 text-xs">
                💡 <strong className="text-white">Didukung Sistem Manajemen Digital:</strong> Seluruh kolam kami
                tercatat secara harian di sistem manajemen budidaya untuk akurasi data pakan, biomassa, dan panen.
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
                Konsultasikan Kebutuhan Ikan & Kemitraan Pasokan
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Kami siap melayani kebutuhan pasokan ikan konsumsi segar, benih ikan air tawar, serta kerjasama usaha jangka panjang. Silakan hubungi <strong>Haji Anung Suryanto</strong> dan tim Papap Fish Farm.
              </p>

              <div className="space-y-4 pt-4 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Lokasi Peternakan Farm:</p>
                    <p className="text-slate-500 text-xs">
                      Sentra Budidaya Ikan Air Tawar Papap Fish Farm, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Telepon & WhatsApp Pemesanan:</p>
                    <p className="text-slate-500 text-xs">+62 812-3456-7890 / H. Anung Suryanto</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Email Resmi:</p>
                    <p className="text-slate-500 text-xs">kontak@papapfishfarm.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-800">Jam Operasional & Kunjungan Farm:</p>
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
                  Isi formulir berikut dan tim Papap Fish Farm akan menghubungi Anda via WhatsApp dalam 1x24 jam.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Nama Lengkap / Nama Usaha *
                      </label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Contoh: RM Sari Laut / Budi"
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
                      Komoditas / Kebutuhan *
                    </label>
                    <select
                      value={contactForm.interest}
                      onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                    >
                      <option value="Ikan Konsumsi Segar (Lele / Nila)">Ikan Lele Konsumsi Segar (Restoran / Warung)</option>
                      <option value="Ikan Nila Segar">Ikan Nila Konsumsi Segar (Merah / Hitam)</option>
                      <option value="Bibit Ikan Air Tawar">Bibit / Benih Ikan Air Tawar Unggul</option>
                      <option value="Kemitraan Suplai Rutin">Kemitraan Pasokan Grosir / Pasar Induk</option>
                      <option value="Lainnya">Konsultasi / Kunjungan Farm</option>
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
                      placeholder="Tuliskan estimasi jumlah kebutuhan (misal: 100 kg/minggu lele/nila) dan lokasi kirim..."
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
                <h4 className="font-bold text-white text-base">Papap Fish Farm</h4>
                <p className="text-xs text-slate-400">Pusat Budidaya Ikan Air Tawar & Pasokan Segar Berkualitas &bull; Pemilik: H. Anung Suryanto</p>
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
            <p>&copy; 2026 Papap Fish Farm. Seluruh hak cipta dilindungi.</p>
            <p>Dibangun untuk peternak ikan air tawar modern Indonesia 🇮🇩</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
