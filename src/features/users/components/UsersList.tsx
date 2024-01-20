import * as React from "react";
import {
  Button,
  Col,
  Drawer,
  Flex,
  Form,
  Input,
  Row,
  Table,
  TableProps,
} from "antd";
import { useUsers } from "../api/getUsers";
import { User } from "../types";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";
import { useNavigate } from "react-router";
import NiceModal from "@ebay/nice-modal-react";
import SimpleModal from "../../../components/Elements/SimpleModal";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const UsersList = () => {
  const navigate = useNavigate();

  const { users, fetched, setAll, remove } = useUsersStore();
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
              form={form}
              autoComplete="off"
              data-test="form-create"
            >
              <Form.Item label="Name">
                <Input />
              </Form.Item>
              <Form.Item label="Username">
                <Input />
              </Form.Item>
              <Form.Item label="Email">
                <Input />
              </Form.Item>
              <Form.Item label="Website">
                <Input />
              </Form.Item>
              <Form.Item label="Phone">
                <Input />
              </Form.Item>
              <Form.Item label="Address">
                <TextArea />
              </Form.Item>
              <Form.Item label="Company Name">
                <Input />
              </Form.Item>
              <Form.Item>
                <Button onClick={closeDrawer}>Cancel</Button>
                <Button
                  type="primary"
                  onClick={() => {
                    // TODO submit handler
                    closeDrawer();
                  }}
                >
                  Create User
                </Button>
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
