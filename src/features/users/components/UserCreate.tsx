import * as React from "react";
import FormDrawer from "../../../components/Forms/FormDrawer";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UserForm from "../../../components/Forms/UserForm";
import { NewUser } from "../types";
import { useUsersStore } from "../../../stores/users";

const UserCreate = () => {
  const { create } = useUsersStore();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields({ validateOnly: true }).then((values: NewUser) => {
      create(values);
    });
  };

  return (
    <FormDrawer
      title="Create User"
      triggerButton={
        <Button
          type="primary"
          icon={<PlusOutlined />}
          data-test="button-create"
        >
          Add User
        </Button>
      }
      submitButton={
        <Button type="primary" htmlType="submit">
          Create User
        </Button>
      }
      submitHandler={handleSubmit}
    >
      <UserForm formInstance={form} />
    </FormDrawer>
  );
};

export default UserCreate;
