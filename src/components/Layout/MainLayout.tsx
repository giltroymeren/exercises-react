import * as React from "react";
import { Layout, Space } from "antd";
import { Outlet } from "react-router";
import { TeamOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const HeaderSection = () => (
  <div data-test="section-header" className="section-header">
    <Layout.Header>
      <Space>
        <TeamOutlined />
        <Link to={"/"}>
          <span>MyCustomers</span>
        </Link>
      </Space>
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
    <Layout data-test="section-body" className="section-body">
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
    <FooterSection />
  </Layout>
);

export default MainLayout;
