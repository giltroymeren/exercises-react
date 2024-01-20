import * as React from "react";
import FormDrawer from "../../../components/Forms/FormDrawer";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UserForm from "../../../components/Forms/UserForm";
import { NewUser } from "../types";
import { useUsersStore } from "../../../stores/users";

const UserCreate = () => {
  const { create } = useUsersStore();

  const handleSubmit = (values: NewUser) => {
    create({
      ...values,
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
    >
      <UserForm handleSubmit={handleSubmit} />
    </FormDrawer>
  );
};

export default UserCreate;
