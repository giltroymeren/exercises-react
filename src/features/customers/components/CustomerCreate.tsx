import * as React from "react";
import { Button, Form, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import CustomerForm from "../../../components/Forms/CustomerForm";
import { NewCustomer } from "../types";
import { useCustomersStore } from "../../../stores/customers";
import useDrawer from "../../../hooks/useDrawer";

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
      data-test="button-create"
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
