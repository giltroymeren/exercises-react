import * as React from "react";
import { Button, Form } from "antd";
import { useCustomersStore } from "@/stores/customers";
import useDrawer from "@/hooks/useDrawer";
import { Customer } from "@/features";
import CustomerForm from "@/components/Forms/CustomerForm";

type Props = {
  id: number;
};

const CustomerUpdate = ({ id }: Props) => {
  const { edit } = useCustomersStore();
  const [form] = Form.useForm();

  const { show, hide } = useDrawer();

  const handleSubmit = () => {
    form.validateFields({ validateOnly: true }).then((values: Customer) => {
      edit({ ...values, id });
      hide();
    });
  };

  return (
    <Button
      data-testid="button-update"
      onClick={() => {
        show({
          title: "Update Customer",
          onClose: hide,
          children: (
            <CustomerForm
              id={id}
              formInstance={form}
              submitText="Update Customer"
              handleSubmit={handleSubmit}
              handleCancel={hide}
              testId="form-update"
            />
          ),
        });
      }}
    >
      Update
    </Button>
  );
};

export default CustomerUpdate;
