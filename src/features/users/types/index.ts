export type NewUser = {
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
};

export type User = {
  id: number;
} & NewUser;
