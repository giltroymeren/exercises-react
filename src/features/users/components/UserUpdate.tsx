import * as React from "react";
import { Button, Form } from "antd";
import UserForm from "../../../components/Forms/UserForm";
import { User } from "../types";
import { useUsersStore } from "../../../stores/users";
import useDrawer from "../../../hooks/useDrawer";

type Props = {
  id: number;
};

const UserUpdate = ({ id }: Props) => {
  const { edit } = useUsersStore();
  const [form] = Form.useForm();

  const { show, hide } = useDrawer();

  const handleSubmit = () => {
    form.validateFields({ validateOnly: true }).then((values: User) => {
      edit({ ...values, id });
      hide();
    });
  };

  return (
    <Button
      data-test="button-edit"
      onClick={() => {
        show({
          title: "Update User",
          onClose: hide,
          children: (
            <UserForm
              userId={id}
              formInstance={form}
              submitText="Update User"
              handleSubmit={handleSubmit}
              handleCancel={hide}
            />
          ),
        });
      }}
    >
      Update
    </Button>
  );
};

export default UserUpdate;
