export type NewCustomer = {
  name: string;
  username: string;
  email: string;
  address: string;
  phone: string;
  website: string;
  company: string;
};

export type Customer = {
  id: number;
} & NewCustomer;
