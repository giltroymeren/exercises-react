import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import * as React from "react";
import { SmileFilled } from "@ant-design/icons";

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => (
  <Layout>
    <Header>
      <div className="brand">
        <SmileFilled /> MyCustomers
      </div>
    </Header>
    <Layout>
      <Content>{children}</Content>
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
);

export default MainLayout;
