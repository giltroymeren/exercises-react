import * as React from "react";
import { Spin } from "antd";

const Spinner = () => (
  <div data-testid="container-spinner">
    <Spin size="large" data-testid="element-spinner" /> <h3>Loading...</h3>
  </div>
);

export default Spinner;
