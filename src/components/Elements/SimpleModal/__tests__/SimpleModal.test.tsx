import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "antd";
import SimpleModal from "../SimpleModal";
import NiceModal from "@ebay/nice-modal-react";

const TESTID = "modal";
const TITLE = "Modal Title";
const BODY_TEXT = "Hello World";
const SUBMIT_TEXT = "Ok";
const BUTTON_OPEN = "Open";

const TestSimpleModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const close = React.useCallback(() => setIsOpen(false), [isOpen]);

  return (
    <NiceModal.Provider>
      <Button
        onClick={() => {
          NiceModal.show(SimpleModal, {
            title: TITLE,
            submitText: SUBMIT_TEXT,
            handleSubmit: close,
            children: BODY_TEXT,
          });
        }}
      >
        {BUTTON_OPEN}
      </Button>
    </NiceModal.Provider>
  );
};

describe("SimpleDrawer", () => {
  const expectClosed = () => {
    expect(screen.queryByTestId(TESTID)).toBeFalsy();
    expect(screen.queryByText(TITLE)).toBeFalsy();
    expect(screen.queryByText(BODY_TEXT)).toBeFalsy();
  };

  beforeEach(async () => {
    await render(<TestSimpleModal />);

    expectClosed();

    fireEvent.click(screen.getByRole("button", { name: BUTTON_OPEN }));

    expect(screen.queryByTestId(TESTID)).toBeTruthy();
    expect(screen.queryByText(TITLE)).toBeTruthy();
    expect(screen.queryByText(BODY_TEXT)).toBeTruthy();
    expect(screen.queryByText(SUBMIT_TEXT)).toBeTruthy();
  });

  test("should be closed when cancel button is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: /cancel/i }));

    expectClosed();
    expect(screen.queryByText(SUBMIT_TEXT)).toBeFalsy();
  });

  test("should be closed when submit button is clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: SUBMIT_TEXT }));

    expectClosed();
    expect(screen.queryByText(SUBMIT_TEXT)).toBeFalsy();
  });
});
