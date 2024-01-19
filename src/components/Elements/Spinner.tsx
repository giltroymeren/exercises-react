import * as React from "react";
import { Spin } from "antd";

const Spinner = () => (
  <div data-test="spinner">
    <Spin size="large" /> <h3>Loading...</h3>
  </div>
);

export default Spinner;