const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.findMany();
  for (const u of users) {
    await prisma.user.update({
      where: { id: u.id },
      data: {
        name: 'Haji Anung Suryanto',
        farmName: 'Papap Fish Farm',
      },
    });
  }
  console.log('Database user berhasil diperbarui:', users.length, 'pengguna diperbarui ke Haji Anung Suryanto - Papap Fish Farm');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
