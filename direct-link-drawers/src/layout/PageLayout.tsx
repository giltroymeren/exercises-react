import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";
import { Flex, Layout } from "antd";

const { Content } = Layout;

const PageLayout: React.FC = () => (
  <Flex wrap="wrap">
    <Layout>
      <Navigation />

      <Content>
        <Outlet />
      </Content>
    </Layout>
  </Flex>
);

export default PageLayout;
