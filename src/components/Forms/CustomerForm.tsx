import * as React from "react";
import { Button, Form, FormInstance, Input, Space } from "antd";
import { useCustomersStore } from "../../stores/customers";

type Props = {
  formInstance: FormInstance<any>;
  submitText: string;
  handleSubmit: () => void;
  handleCancel: () => void;
  id?: number;
};

const CustomerForm = ({
  formInstance,
  submitText,
  handleSubmit,
  handleCancel,
  id,
}: Props) => {
  const { getById } = useCustomersStore();
  const initialValues = id ? getById(id) : {};

  const [submittable, setSubmittable] = React.useState(false);
  const values = Form.useWatch([], formInstance);

  React.useEffect(() => {
    formInstance.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Form
      form={formInstance}
      layout="vertical"
      autoComplete="off"
      data-test="form-create"
      scrollToFirstError
      name="validateOnly"
      initialValues={initialValues}
      onFinish={handleSubmit}
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
        <Input.TextArea name="address" />
      </Form.Item>
      <Form.Item
        label="Company Name"
        name="company"
        rules={[{ required: true }]}
      >
        <Input name="company" />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit" disabled={!submittable}>
            {submitText}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default CustomerForm;
