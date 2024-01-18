import * as React from "react";
import Layout, { Content, Footer } from "antd/es/layout/layout";
import PostsList from "./features/posts/components/PostsList";

const App = () => {
  return (
    <Layout>
      <h1>Customer Phone Book App</h1>
      <Layout>
        <Content>
          <PostsList />
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
  );
};

export default App;
