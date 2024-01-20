import * as React from "react";
import { Button, Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Outlet, useNavigate } from "react-router";
import { PlusOutlined } from "@ant-design/icons";

const HeaderSection = () => {
  const navigate = useNavigate();

  return (
    <div data-test="section-header">
      <Header>
        <span>Customer Phone Book App</span>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          data-test="button-create"
          onClick={() => navigate("/user/create")}
        >
          Add User
        </Button>
      </Header>
    </div>
  );
};

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

const MainLayout = () => (
  <Layout>
    <HeaderSection />
    <Layout data-test="section-body">
      <Content>
        <Outlet />
      </Content>
    </Layout>
    <FooterSection />
  </Layout>
);

export default MainLayout;
