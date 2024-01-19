import * as React from "react";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

type Props = {
  children: React.ReactNode;
};

const HeaderSection = () => (
  <div data-test="section-header">
    <Header>
      <span>Customer Phone Book App</span>
    </Header>
  </div>
);

const FooterSection = () => (
  <Footer data-test="section-footer">
    <a
      href="https://giltroymeren.github.io/"
      target="_blank"
      rel="noreferrer nofollow"
    >
      Troy Meren
    </a>{" "}
    &copy; 2024
  </Footer>
);

const MainLayout = ({ children }: Props) => (
  <Layout>
    <HeaderSection />
    <Layout data-test="section-body">
      <Content>{children}</Content>
    </Layout>
    <FooterSection />
  </Layout>
);

export default MainLayout;
