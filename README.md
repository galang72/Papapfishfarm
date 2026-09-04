# LeleFarm Management 🐟🌾

Aplikasi Web Responsif Modern Sistem Manajemen & Pencatatan Budidaya Ikan Lele, Keuangan, Panen, Pakan, Analisis FCR/ROI, dan Pelaporan Lengkap.

---

## 🚀 Fitur Utama

1. **Dashboard Utama**:
   - 10 Kartu Ringkasan Real-time: Total Uang Masuk, Total Uang Keluar, Keuntungan, Kerugian, Saldo Kas, Total Ikan Dipelihara, Total Ikan Mati, Total Ikan Dipanen, Siklus Aktif, Siklus Selesai.
   - 4 Grafik Interaktif Recharts: Arus Kas Bulanan, Tren Laba Bersih, Tren Kematian Ikan Harian, Hasil Panen per Siklus.
   - Smart Alert System: Peringatan otomatis jika mortalitas > 5%, mendekati estimasi panen, pengeluaran tinggi, atau kolam penuh.
   - Feed Aktivitas Terbaru: Transaksi, kematian lele, dan panen terbaru.

2. **Manajemen Siklus Budidaya**:
   - Pencatatan kode siklus, tanggal tebar, estimasi panen, kolam, jumlah bibit awal, harga satuan bibit, ukuran benih, jenis pakan, dan catatan.
   - Halaman detail komprehensif (`/siklus/[id]`) dengan metrik FCR, SR, MR, HPP/kg, ROI, serta tab terintegrasi riwayat pakan, kematian, panen, dan transaksi kas.

3. **Manajemen Kolam**:
   - Pengelolaan kolam (Bioflok, Terpal Persegi, Bundar, Kolam Tanah, Beton).
   - Status kolam (*Kosong*, *Digunakan*, *Perawatan*) dan identifikasi siklus aktif yang sedang menempati.

4. **Pencatatan Ikan Mati (Mortality)**:
   - Form pencatatan tanggal, siklus, jumlah mati, penyebab (Kualitas air, jamur/penyakit, kanibalisme, suhu, dsb.).
   - Perhitungan otomatis persentase mortalitas (%) dan estimasi sisa ikan hidup.
   - Grafik tren kematian harian.

5. **Pencatatan Panen (Harvest)**:
   - Pencatatan tanggal panen, siklus, kolam, jumlah ekor, berat total (kg), harga jual/kg, dan pembeli.
   - Otomatis menghitung pendapatan panen dan otomatis mencatat ke buku kas (Uang Masuk).
   - Indikator rata-rata bobot ikan (gram/ekor) dan harga jual rata-rata.

6. **Pencatatan Biaya Pakan (Feed)**:
   - Log pemberian/pembelian pelet harian (PF 1000, 781-1, 781-2, maggot alternatif).
   - Otomatis menghitung total biaya pakan dan terhubung ke pengeluaran kas.
   - Menghitung rasio biaya pakan per kg hasil panen.

7. **Manajemen Keuangan (Buku Kas)**:
   - Pemisahan jelas antara **Uang Masuk** (Penjualan ikan, panen raya, omzet lain) dan **Uang Keluar** (Bibit, pakan, vitamin, listrik, upah, kolam).
   - Perhitungan saldo kas real-time.
   - Filter berdasarkan kategori, siklus, dan rentang tanggal.

8. **Perhitungan Laba & Rugi (P&L)**:
   - Otomatis membandingkan Pendapatan Operasional vs Biaya Produksi Langsung (HPP) & Operasional Umum.
   - Evaluasi otomatis status untung (hijau) atau rugi (merah).
   - Menghitung Margin Laba (%), Biaya Produksi per kg (HPP/kg), Pendapatan/kg, dan Keuntungan/kg.
   - Filter: Hari ini, Minggu ini, Bulan ini, Tahun ini, atau Per Siklus Budidaya.

9. **Target & Analisis Budidaya**:
   - Survival Rate (SR): $\frac{\text{Ikan Panen}}{\text{Ikan Awal}} \times 100\%$
   - Mortality Rate (MR): $\frac{\text{Ikan Mati}}{\text{Ikan Awal}} \times 100\%$
   - FCR (Feed Conversion Ratio): $\frac{\text{Total Pakan (kg)}}{\text{Total Bobot Panen (kg)}}$
   - HPP per kg: $\frac{\text{Total Biaya Produksi}}{\text{Total Bobot Panen (kg)}}$
   - ROI Siklus: $\frac{\text{Keuntungan Bersih}}{\text{Total Modal}} \times 100\%$
   - Tabel komparasi performa seluruh siklus farm.

10. **Laporan & Ekspor**:
    - Laporan Keuangan, Laporan Budidaya, dan Laporan Panen.
    - Tombol **Export Excel (.xlsx)** instan dengan SheetJS.
    - Tombol **Cetak / PDF** dengan layout kop surat resmi dan lembar tanda tangan pengawas/pemilik.

11. **Keamanan & Multi-Tenant**:
    - Login & Logout berbasis session cookie.
    - Scoping data per `userId`.
    - Akun demo siap pakai: `admin@lelefarm.id` / `password123`.

---

## 🛠️ Stack Teknologi

- **Frontend**: Next.js 14 (App Router), React 18, TypeScript
- **Styling**: Tailwind CSS (Aquatic & Farm Theme: Emerald, Teal, Slate)
- **Database**: SQLite dengan Prisma ORM (Relasional, cascade delete, foreign keys)
- **Visualisasi Grafik**: Recharts
- **Ekspor Excel**: SheetJS (`xlsx`)
- **Icon**: Lucide React

---

## 💻 Cara Menjalankan

1. **Masuk ke folder project**:
   ```bash
   cd C:\Users\ajawe\Papapfishfarm-management
   ```

2. **Jalankan aplikasi (Development)**:
   ```bash
   npm run dev
   ```

3. **Atau jalankan versi Produksi (Optimized Build)**:
   ```bash
   npm run build
   npm run start
   ```

4. **Buka di Browser**:
   [http://localhost:3000](http://localhost:3000)

---

## 👤 Akun Demo Pengujian

- **Email**: `admin@lelefarm.id`
- **Kata Sandi**: `password123`
- **Nama Pengelola**: Haji Anung Suryanto
- **Nama Usaha**: Papapfishfarm
