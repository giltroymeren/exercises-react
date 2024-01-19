import * as React from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { ButtonProps, Modal } from "antd";

type Props = {
  children: React.ReactNode;
  handleSubmit: () => void;
  title?: string;
  submitText?: string;
  submitProps?: ButtonProps;
};

const SimpleModal = ({
  children,
  handleSubmit,
  title,
  submitText,
  submitProps,
}: Props) => {
  const modal = useModal();

  return (
    <Modal
      title={title || ""}
      open={modal.visible}
      onOk={() => {
        handleSubmit();
        modal.hide();
      }}
      onCancel={modal.hide}
      afterClose={modal.remove}
      okText={submitText}
      okButtonProps={submitProps}
    >
      {children}
    </Modal>
  );
};

export default NiceModal.create(SimpleModal);
