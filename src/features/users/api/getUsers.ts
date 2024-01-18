import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";
import { User } from "../types";

export const getUsers = (): Promise<User[]> => axios.get("/users");

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => getUsers(),
  });
