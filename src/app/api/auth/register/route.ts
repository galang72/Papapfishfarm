import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserSessionCookieName } from '@/lib/auth';

export async function POST() {
  return NextResponse.json(
    { error: 'Pendaftaran akun baru dinonaktifkan. Silakan hubungi pemilik usaha untuk akses.' },
    { status: 403 }
  );
}

