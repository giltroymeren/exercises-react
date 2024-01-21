import * as React from "react";
import { Button } from "antd";
import NiceModal from "@ebay/nice-modal-react";
import { useNavigate } from "react-router";
import { useCustomersStore } from "@/stores/customers";
import { Customer } from "@/features";
import SimpleModal from "@/components/Elements/SimpleModal/SimpleModal";

type Props = {
  id: number;
  name: string;
};

const CustomerDelete = ({ id, name }: Props) => {
  const navigate = useNavigate();
  const { remove } = useCustomersStore();

  const handleSubmit = () => {
    remove(id);
    navigate("/");
  };

  return (
    <Button
      danger
      data-testid="button-delete"
      onClick={() =>
        NiceModal.show(SimpleModal, {
          title: "Delete Customer",
          handleSubmit,
          submitText: "Delete",
          submitProps: {
            type: "primary",
            danger: true,
            "data-testid": "button-modal-delete",
          },
          children: (
            <p>
              Are you sure you want to delete Customer "<strong>{name}</strong>
              "? This action is irreversible.
            </p>
          ),
        })
      }
    >
      Delete
    </Button>
  );
};

export default CustomerDelete;
