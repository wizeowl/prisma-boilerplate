import faker from 'faker';

const range = length =>
  Array.apply(null, Array(length)).map((_, i) => i);
const name = () =>
  `${faker.name.findName()} ${faker.name.lastName()}`;
const age = () => Math.round(Math.random() * 80) + 10;
const rand = n => Math.floor(Math.random() * n);
const pickRand = coll => coll[rand(coll.length)];
const coinFlip = () => Math.random() > 0.5;

export const seedUsers = (length, password) =>
  range(length).map(() => ({
    password,
    name: name(),
    email: faker.internet.email().toLowerCase()
  }));
