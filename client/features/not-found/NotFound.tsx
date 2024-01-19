import * as React from "react";
import { Button } from "antd";

const NotFound = () => (
  <div data-test="container-404">
    <h3>Page not found</h3>
    <Button href="/">Back to Home</Button>
  </div>
);

export default NotFound;
