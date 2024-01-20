import * as React from "react";
import { Button, Drawer, Space } from "antd";

type Props = {
  title: string;
  triggerButton: React.ReactElement;
  submitButton: React.ReactElement;
  children: React.ReactNode;
};

const FormDrawer = ({
  title,
  triggerButton,

  submitButton,
  children,
}: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const open = React.useCallback(() => setIsOpen(true), [isOpen]);
  const close = React.useCallback(() => setIsOpen(false), [isOpen]);

  return (
    <>
      {React.cloneElement(triggerButton, { onClick: open })}
      <Drawer
        title={title}
        width="50%"
        open={isOpen}
        onClose={close}
        footer={
          <Space>
            <Button onClick={close}>Cancel</Button>
            {submitButton}
          </Space>
        }
        data-test="drawer"
      >
        {children}
      </Drawer>
    </>
  );
};

export default FormDrawer;
