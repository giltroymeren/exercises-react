import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { queryClient } from "../lib/react-query";
import { store } from "../store";
import { Provider } from "react-redux";
import Spinner from "../components/Elements/Spinner/Spinner";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => (
  <React.Suspense fallback={<Spinner />}>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryClientProvider>
    </Provider>
  </React.Suspense>
);

export default AppProvider;
