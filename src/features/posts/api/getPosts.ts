import { useQuery } from "@tanstack/react-query";
import { axios } from "../../../lib/axios";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export const getPosts = (): Promise<Post[]> => axios.get("/posts");

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });
