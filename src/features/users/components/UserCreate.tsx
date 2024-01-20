import * as React from "react";
import { Button, Form, Space } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UserForm from "../../../components/Forms/UserForm";
import { NewUser } from "../types";
import { useUsersStore } from "../../../stores/users";
import useDrawer from "../../../hooks/useDrawer";

const UserCreate = () => {
  const { create } = useUsersStore();
  const [form] = Form.useForm();

  const { show, hide } = useDrawer();

  const handleSubmit = () => {
    form.validateFields({ validateOnly: true }).then((values: NewUser) => {
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
          title: "Create User",
          onClose: hide,
          children: (
            <UserForm
              formInstance={form}
              submitText="Create User"
              handleSubmit={handleSubmit}
              handleCancel={hide}
            />
          ),
        });
      }}
    >
      Create User
    </Button>
  );
};

export default UserCreate;
