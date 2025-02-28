import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient();

async function seed() {
  console.log('Database seed loading...');

  await prisma.products.deleteMany();

  for (let i = 0; i < 300; i++) {
    await prisma.products.create({
      data: {
        avaliable: true,
        description: faker.lorem.sentence(),
        mark: faker.lorem.word(),
        name: faker.lorem.word(),
        price: faker.finance.amount(),
        stock: 300,
      },
    });
  }

  console.log('Database seet completed!');

  await prisma.$disconnect();
}

seed().catch((e) => {
  console.error(e);
  prisma.$disconnect();
  process.exit(1);
});
