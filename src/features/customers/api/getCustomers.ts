import { Customer } from "@/features";
import { axios } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

export const getCustomers = (): Promise<Customer[]> => axios.get("/customers");

export const useCustomers = () =>
  useQuery({
    queryKey: ["customers"],
    queryFn: () => getCustomers(),
  });
