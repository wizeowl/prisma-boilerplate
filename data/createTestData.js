import { prisma } from '../src/prisma';
import { validateAndHashPassword } from '../src/utils/validateAndHashPassword';
import { seedUsers } from './seeds';

const createTestData = async () => {
  const start = new Date();
  const password = await validateAndHashPassword('azertyui');

  await Promise.all(
    seedUsers(100, password).map(user =>
      prisma.mutation.createUser({ data: user })
    )
  );

  await prisma.query.users(null, '{ id }');
  const end = new Date();
  const duration = (end - start) / 1000;
  console.log(`took ${duration} s`);
};

createTestData();
