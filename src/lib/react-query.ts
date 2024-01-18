import { DefaultOptions, QueryClient } from "react-query";

const defaultOptions: DefaultOptions = {
  queries: {
    refetchOnWindowFocus: false,
    retry: false,
    useErrorBoundary: true,
  },
};

export const queryClient = new QueryClient({ defaultOptions });
