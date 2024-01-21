import * as React from "react";
import { render, screen } from "@testing-library/react";
import Spinner from "../Spinner";

const TestSpinner = () => <Spinner />;

describe("Spinner", () => {
  test("should appear as is", async () => {
    await render(<TestSpinner />);

    expect(screen.queryByTestId("element-spinner")).toBeTruthy();
  });
});
