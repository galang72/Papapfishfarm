import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const USER_SESSION_COOKIE = 'lelefarm_user_id';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const session = request.cookies.get(USER_SESSION_COOKIE)?.value;

  // 1. Izinkan file statis, aset publik, dan autentikasi
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/auth/login') ||
    pathname.startsWith('/api/auth/register') ||
    pathname === '/logo.png' ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next();
  }

  // 2. Izinkan halaman Landing Page Company Profile untuk umum/publik
  if (pathname === '/profil-perusahaan' || pathname === '/tentang') {
    return NextResponse.next();
  }

  // 3. Jika pengguna BELUM LOGIN
  if (!session) {
    // Halaman login diizinkan
    if (pathname === '/login') {
      return NextResponse.next();
    }

    // Jika mengakses API data terproteksi tanpa sesi, tolak 401 Unauthorized
    if (pathname.startsWith('/api/')) {
      return NextResponse.json(
        { error: 'Akses ditolak. Silakan login terlebih dahulu.' },
        { status: 401 }
      );
    }

    // Jika mencoba membuka halaman dashboard (/, /siklus, /kolam, /keuangan, dsb.)
    // Cegah dan alihkan otomatis ke halaman login
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }

  // 4. Jika pengguna SUDAH LOGIN dan membuka halaman login, alihkan ke dashboard
  if (pathname === '/login') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Berlaku untuk semua path kecuali file statis internal Next.js
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
