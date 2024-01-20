import * as React from "react";
import { Customer } from "../types";
import { Button } from "antd";
import NiceModal from "@ebay/nice-modal-react";
import { useCustomersStore } from "../../../stores/customers";
import SimpleModal from "../../../components/Elements/SimpleModal/SimpleModal";
import { useNavigate } from "react-router";

type Props = {
  customer: Customer;
};

const CustomerDelete = ({ customer }: Props) => {
  const navigate = useNavigate();
  const { remove } = useCustomersStore();

  return (
    <Button
      danger
      data-test="button-delete"
      onClick={() =>
        NiceModal.show(SimpleModal, {
          title: "Delete Customer",
          handleSubmit: () => {
            remove(customer.id);
            navigate("/");
          },
          submitText: "Delete",
          submitProps: { type: "primary", danger: true },
          children: (
            <p>
              Are you sure you want to delete Customer "
              <strong>{customer.name}</strong>
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
