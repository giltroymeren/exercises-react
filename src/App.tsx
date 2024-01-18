import * as React from "react";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import UsersList from "./features/users/components/UsersList";
import AppProvider from "./providers/app";

const App = () => {
  return (
    <AppProvider>
      <Layout>
        <h1>Customer Phone Book App</h1>
        <Layout>
          <Content>
            <UsersList />
          </Content>
        </Layout>
        <Footer>
          <a
            href="https://giltroymeren.github.io/"
            target="_blank"
            rel="noreferrer nofollow"
          >
            Troy Meren
          </a>{" "}
          &copy; 2024
        </Footer>
      </Layout>
    </AppProvider>
  );
};

export default App;
