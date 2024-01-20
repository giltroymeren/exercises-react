import * as React from "react";
import Spinner from "../Spinner";
import { render, screen } from "@testing-library/react";

const TestSpinner = () => <Spinner />;

describe("Spinner", () => {
  test("should appear as is", async () => {
    await render(<TestSpinner />);

    expect(screen.queryByTestId("element-spinner")).toBeTruthy();
  });
});
