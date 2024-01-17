import React from "react";
import Layout, { Header, Content, Footer } from "antd/es/layout/layout";

const App = () => {
  return (
    <Layout>
      <h1>Customer Phone Book App</h1>
      <Layout>
        <Content>Main content</Content>
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
};

export default App;
