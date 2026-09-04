import { cookies } from 'next/headers';
import { prisma } from './prisma';

const USER_SESSION_COOKIE = 'lelefarm_user_id';

export async function getCurrentUser() {
  const cookieStore = cookies();
  const userId = cookieStore.get(USER_SESSION_COOKIE)?.value;

  if (userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, email: true, name: true, farmName: true },
    });
    if (user) return user;
  }

  // Wajib login: kembalikan null jika belum memiliki sesi aktif
  return null;
}

export function getUserSessionCookieName() {
  return USER_SESSION_COOKIE;
}
