'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Fish, Lock, Mail, User, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function LoginPage() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [farmName, setFarmName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
      const payload = isRegister
        ? { email, password, name, farmName }
        : { email, password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || (isRegister ? 'Registrasi gagal' : 'Login gagal'));
      }

      router.push('/');
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Terjadi kesalahan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-slate-900">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl border border-slate-100 space-y-6">
        {/* Brand Icon */}
        <div className="text-center space-y-2">
          <Link href="/profil-perusahaan" className="inline-block group">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center text-white mx-auto shadow-lg shadow-emerald-900/30 group-hover:scale-105 transition-transform">
              <Fish className="w-8 h-8" />
            </div>
          </Link>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">Papap Fish Farm</h1>
          <p className="text-xs text-slate-500">
            Sistem Manajemen & Pencatatan Usaha Budidaya Ikan Air Tawar
          </p>
        </div>

        {/* Tab Toggle: Masuk vs Daftar */}
        <div className="flex bg-slate-100 p-1 rounded-2xl">
          <button
            type="button"
            onClick={() => {
              setIsRegister(false);
              setError(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              !isRegister
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Masuk
          </button>
          <button
            type="button"
            onClick={() => {
              setIsRegister(true);
              setError(null);
            }}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
              isRegister
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-900'
            }`}
          >
            Daftar Akun Baru
          </button>
        </div>

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-semibold rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegister && (
            <>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Lengkap / Pengelola *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Contoh: Budi Santoso"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Peternakan / Farm
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={farmName}
                    onChange={(e) => setFarmName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Contoh: Mina Lele Makmur"
                  />
                </div>
              </div>
            </>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email *</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="nama@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi *</label>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-xl shadow-md shadow-emerald-700/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            <span>
              {loading
                ? 'Memproses...'
                : isRegister
                ? 'Daftar & Masuk'
                : 'Masuk ke Dashboard'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-2 text-center">
          <Link
            href="/profil-perusahaan"
            className="text-xs text-slate-500 hover:text-emerald-600 transition-colors"
          >
            &larr; Lihat Profil Perusahaan (Landing Page)
          </Link>
        </div>
      </div>
    </div>
  );
}
