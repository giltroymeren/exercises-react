import * as React from "react";
import FormDrawer from "../../../components/Forms/FormDrawer";
import { Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import UserForm from "../../../components/Forms/UserForm";
import { User } from "../types";
import { useUsersStore } from "../../../stores/users";
import { useNavigate } from "react-router";

type Props = {
  id: number;
};

const UserUpdate = ({ id }: Props) => {
  const navigate = useNavigate();

  const { edit } = useUsersStore();
  const [form] = Form.useForm();

  const handleSubmit = () => {
    form.validateFields({ validateOnly: true }).then((values: User) => {
      edit({ ...values, id });
    });
  };

  return (
    <FormDrawer
      title="Update User"
      triggerButton={<Button data-test="button-edit">Update</Button>}
      submitButton={
        <Button type="primary" htmlType="submit">
          Update User
        </Button>
      }
      submitHandler={handleSubmit}
    >
      <UserForm formInstance={form} userId={id} />
    </FormDrawer>
  );
};

export default UserUpdate;
