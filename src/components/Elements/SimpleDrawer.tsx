import NiceModal, { antdDrawerV5, useModal } from "@ebay/nice-modal-react";
import { Drawer } from "antd";
import * as React from "react";

export type SimpleDrawerProps = {
  title: string;
  onClose: () => void;
  children: React.ReactElement;
  footer?: React.ReactNode;
};

export const SimpleDrawer = NiceModal.create(
  ({ title, onClose, children, footer }: SimpleDrawerProps) => {
    const modal = useModal();

    return (
      <Drawer
        {...antdDrawerV5(modal)}
        title={title}
        onClose={onClose}
        footer={footer}
        width="50%"
        data-testid="drawer"
      >
        {children}
      </Drawer>
    );
  }
);
