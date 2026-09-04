import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getUserSessionCookieName } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name, farmName } = body;

    if (!email || !password || !name) {
      return NextResponse.json(
        { error: 'Email, password, dan nama pengelola wajib diisi' },
        { status: 400 }
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Alamat email sudah terdaftar. Silakan gunakan email lain atau langsung login.' },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        password,
        name,
        farmName: farmName || 'LeleFarm Mandiri',
      },
    });

    const response = NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        farmName: newUser.farmName,
      },
    });

    // Pasang session cookie otomatis
    response.cookies.set(getUserSessionCookieName(), newUser.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 hari
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Pendaftaran gagal' }, { status: 500 });
  }
}
