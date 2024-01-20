import * as React from "react";
import { Button, Form, Input, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { NewUser } from "../../features/users";

type Props = {
  handleSubmit: (values: any) => void;
};

const UserForm = ({ handleSubmit }: Props) => {
  const [form] = Form.useForm();
  const formValues = Form.useWatch<NewUser>([], form);
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setIsFormValid(true);
      },
      () => {
        setIsFormValid(false);
      }
    );
  }, [formValues]);

  return (
    <Form
      layout="vertical"
      autoComplete="off"
      data-test="form-create"
      scrollToFirstError
      onFinish={handleSubmit}
      name="validateOnly"
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
