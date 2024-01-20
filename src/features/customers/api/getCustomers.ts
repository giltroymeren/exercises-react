import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { Customer } from "../types";

export const getCustomers = (): Promise<Customer[]> => axios.get("/customers");

export const useCustomers = () =>
  useQuery({
    queryKey: ["customers"],
    queryFn: () => getCustomers(),
  });
