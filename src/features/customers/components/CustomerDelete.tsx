import * as React from "react";
import { Button } from "antd";
import NiceModal from "@ebay/nice-modal-react";
import { useNavigate } from "react-router";
import { useCustomersStore } from "@/stores/customers";
import { Customer } from "@/features";
import SimpleModal from "@/components/Elements/SimpleModal/SimpleModal";

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
