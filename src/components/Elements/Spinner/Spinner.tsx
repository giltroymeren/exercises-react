import { Spin } from "antd";
import React from "react";

const Spinner = () => (
  <div className="spinner-container">
    <Spin size="large" data-test="spinner" /> <span>Loading...</span>
  </div>
);

export default Spinner;
