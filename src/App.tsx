import * as React from "react";
import Layout, { Content, Footer, Header } from "antd/es/layout/layout";
import UsersList from "./features/users/components/UsersList";
import AppProvider from "./providers/app";
import MainLayout from "./components/Layout/MainLayout";

const App = () => {
  return (
    <AppProvider>
      <MainLayout>
        <UsersList />
      </MainLayout>
    </AppProvider>
  );
};

export default App;
