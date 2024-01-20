import * as React from "react";
import { Form, FormInstance, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useUsersStore } from "../../stores/users";

type Props = {
  formInstance: FormInstance<any>;
  userId?: number;
};

const UserForm = ({ formInstance, userId }: Props) => {
  const { getById } = useUsersStore();
  const initialValues = userId ? getById(userId) : {};

  return (
    <Form
      form={formInstance}
      layout="vertical"
      autoComplete="off"
      data-test="form-create"
      scrollToFirstError
      name="validateOnly"
      initialValues={initialValues}
    >
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input name="name" />
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, min: 6 }]}
      >
        <Input name="username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, min: 6 }]}
      >
        <Input name="email" />
      </Form.Item>
      <Form.Item label="Website" name="website" rules={[{ required: true }]}>
        <Input name="website" />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, min: 6 }]}
      >
        <Input name="phone" />
      </Form.Item>
      <Form.Item label="Address" name="address" rules={[{ required: true }]}>
        <TextArea name="address" />
      </Form.Item>
      <Form.Item
        label="Company Name"
        name="company"
        rules={[{ required: true }]}
      >
        <Input name="company" />
      </Form.Item>
    </Form>
  );
};

export default UserForm;
