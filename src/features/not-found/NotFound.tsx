import * as React from "react";
import { Button, Result } from "antd";

const NotFound = () => (
  <div data-testid="container-notfound">
    <Result
      status="warning"
      title="Page not found."
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button href="/">Back to Home</Button>}
    />
  </div>
);

export default NotFound;
