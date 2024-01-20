import { faker } from "@faker-js/faker";

type Overrides = Record<string, any>;

export const newUserGenerator = (overrides?: Overrides) => ({
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  address: faker.location.streetAddress(),
  phone: faker.phone.number(),
  website: faker.internet.domainName(),
  company: faker.company.name(),
  ...overrides,
});

export const userGenerator = (overrides?: Overrides) => ({
  id: faker.number.int(),
  ...newUserGenerator(),
});
