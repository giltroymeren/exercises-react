import * as React from "react";
import {
  Button,
  Col,
  Drawer,
  Flex,
  Form,
  Input,
  Row,
  Space,
  Table,
  TableProps,
} from "antd";
import { useUsers } from "../api/getUsers";
import { NewUser, User } from "../types";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";
import { useNavigate } from "react-router";
import NiceModal from "@ebay/nice-modal-react";
import SimpleModal from "../../../components/Elements/SimpleModal";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const UsersList = () => {
  const navigate = useNavigate();

  const { users, fetched, setAll, remove, create } = useUsersStore();
  const usersQuery = useUsers();

  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const openDrawer = React.useCallback(
    () => setIsDrawerOpen(true),
    [isDrawerOpen]
  );
  const closeDrawer = React.useCallback(
    () => setIsDrawerOpen(false),
    [isDrawerOpen]
  );

  const [form] = Form.useForm();
  const formValues = Form.useWatch<NewUser>([], form);
  const [isFormValid, setIsFormValid] = React.useState(false);

  React.useEffect(() => {
    console.log(`isFormValid`, isFormValid);
    form.validateFields({ validateOnly: true }).then(
      () => {
        setIsFormValid(true);
      },
      () => {
        setIsFormValid(false);
      }
    );
  }, [formValues]);

  React.useEffect(() => {
    if (usersQuery.data && !fetched) {
      setAll(usersQuery.data);
    }
  }, [usersQuery.data]);

  if (usersQuery.isLoading) {
    return <Spinner />;
  }

  if (usersQuery.isError) {
    return <h3>Error!</h3>;
  }

  if (!users) {
    return null;
  }

  const columns: TableProps<User>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { email }) => <code>{email}</code>,
    },
    {
      title: "Contact number",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Company",
      dataIndex: "company",
      key: "company",
      render: (_, { company }) => company,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, { id, name }) => (
        <div key={id}>
          <Button
            type="primary"
            data-test="button-view"
            onClick={() => navigate(`/user/${id}`)}
          >
            View
          </Button>
          <Button data-test="button-edit">Edit</Button>
          <Button
            danger
            data-test="button-delete"
            onClick={() =>
              NiceModal.show(SimpleModal, {
                title: "Delete User",
                handleSubmit: () => remove(id),
                submitText: "Delete",
                submitProps: { type: "primary", danger: true },
                children: (
                  <>
                    Do you want to delete user "<strong>{name}</strong>"?
                  </>
                ),
              })
            }
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const handleSubmit = (values: NewUser) => {
    console.info("Creating user:", values);
    create({
      ...values,
    });
    closeDrawer();
  };

  return (
    // TODO custom noData state
    <>
      <Row>
        <Col span={24}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            data-test="button-create"
            onClick={() => {
              openDrawer();
              navigate("/user/create");
            }}
          >
            Add User
          </Button>

          <Drawer
            title="Create User"
            width="50%"
            open={isDrawerOpen}
            onClose={() => {
              closeDrawer();
              navigate("/");
            }}
          >
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
              <Form.Item
                label="Website"
                name="website"
                rules={[{ required: true }]}
              >
                <Input name="website" />
              </Form.Item>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[{ required: true, min: 6 }]}
              >
                <Input name="phone" />
              </Form.Item>
              <Form.Item
                label="Address"
                name="address"
                rules={[{ required: true }]}
              >
                <TextArea name="address" />
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
                  <Button onClick={closeDrawer}>Cancel</Button>
                  <Button
                    type="primary"
                    htmlType="submit"
                    disabled={!isFormValid}
                  >
                    Create User
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Drawer>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Table<User>
            dataSource={users}
            columns={columns}
            rowKey={({ id }) => id}
            data-test="table-users"
            rowClassName={({ id }) => `table-users-row-${id}`}
          />
        </Col>
      </Row>
    </>
  );
};

export default UsersList;
