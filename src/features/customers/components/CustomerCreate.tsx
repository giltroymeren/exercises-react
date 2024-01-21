import * as React from "react";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import useDrawer from "@/hooks/useDrawer";
import { useCustomersStore } from "@/stores/customers";
import { NewCustomer } from "@/features/customers";
import CustomerForm from "@/components/Forms/CustomerForm";

const CustomerCreate = () => {
  const { create } = useCustomersStore();
  const [form] = Form.useForm();

  const { show, hide } = useDrawer();

  const handleSubmit = () => {
    form.validateFields({ validateOnly: true }).then((values: NewCustomer) => {
      create(values);
      form.resetFields();
      hide();
    });
  };

  return (
    <Button
      type="primary"
      icon={<PlusOutlined />}
      data-testid="button-create"
      onClick={() => {
        show({
          title: "Create Customer",
          onClose: hide,
          children: (
            <CustomerForm
              formInstance={form}
              submitText="Create Customer"
              handleSubmit={handleSubmit}
              handleCancel={hide}
              testId="form-create"
            />
          ),
        });
      }}
    >
      Create Customer
    </Button>
  );
};

export default CustomerCreate;
