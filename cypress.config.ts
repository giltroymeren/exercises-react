import { defineConfig } from "cypress";
import webpackConfig from "./webpack.config.js";

export default defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig: webpackConfig,
    },
  },
  e2e: {
    baseUrl: "http://localhost:4000",
    supportFile: false,
    supportFolder: "cypress/support",
  },
});
