import * as React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router";

const HeaderSection = () => (
  <div data-test="section-header">
    <Layout.Header>
      <span>Customer Phone Book App</span>
    </Layout.Header>
  </div>
);

const FooterSection = () => (
  <Layout.Footer data-test="section-footer">
    <a
      href="https://giltroymeren.github.io/"
      target="_blank"
      rel="noreferrer nofollow"
    >
      Troy Meren
    </a>{" "}
    &copy; 2024
  </Layout.Footer>
);

const MainLayout = () => (
  <Layout>
    <HeaderSection />
    <Layout data-test="section-body">
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
    <FooterSection />
  </Layout>
);

export default MainLayout;
