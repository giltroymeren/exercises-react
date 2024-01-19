import { faker } from "@faker-js/faker";

type Overrides = Record<string, any>;

export const addressGenerator = (overrides?: Overrides) => ({
  street: faker.location.street(),
  suite: faker.location.secondaryAddress(),
  city: faker.location.city(),
  zipcode: faker.location.zipCode(),
  geo: {
    lat: faker.location.latitude(),
    lng: faker.location.longitude(),
  },
  ...overrides,
});

export const companyGenerator = (overrides?: Overrides) => ({
  name: faker.company.name(),
  catchPhrase: faker.company.catchPhrase(),
  bs: `${faker.company.buzzAdjective()} ${faker.company.buzzNoun()}`,
  ...overrides,
});

export const userGenerator = (overrides?: Overrides) => ({
  id: faker.number.int(),
  name: faker.person.fullName(),
  username: faker.internet.userName(),
  email: faker.internet.email(),
  address: addressGenerator(),
  phone: faker.phone.number(),
  website: faker.internet.domainName(),
  company: companyGenerator(),
  ...overrides,
});
