import { QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { queryClient } from "../lib/react-query";
import { Spin } from "antd";
import { store } from "../store";
import { Provider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

const AppProvider = ({ children }: Props) => (
  <React.Suspense
    fallback={
      <div>
        <Spin size="large" data-test="spinner" />
      </div>
    }
  >
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Provider>
  </React.Suspense>
);

export default AppProvider;
