import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";

export type AddressCoordinates = {
  lat: string;
  lng: string;
};

export type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: AddressCoordinates;
};

export type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

export const getUsers = (): Promise<User[]> => axios.get("/users");

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
