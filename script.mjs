import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // You can practice using an ORM here, Eddie. <3
}

// This will run your function above.
main().then(async () => {
  // This will run when your script ran successfully
  await prisma.$disconnect()
}).catch(async (reason) => {
  // This will run when your script did NOT run successfully
  console.error(reason);
  await prisma.$disconnect();
  process.exit(1);
})