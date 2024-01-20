import * as React from "react";
import Spinner from "../Spinner";
import { render, screen } from "@testing-library/react";

describe("Spinner", () => {
  test("should appear as is", async () => {
    await render(<Spinner />);

    expect(screen.queryByTestId("container-spinner")).toBeTruthy();
    expect(screen.queryByTestId("element-spinner")).toBeTruthy();
    expect(screen.queryByText("Loading...")).toBeTruthy();
  });
});
