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
import UserForm from "../../../components/Forms/UserForm";
import FormDrawer from "../../../components/Forms/FormDrawer";

const UsersList = () => {
  const navigate = useNavigate();

  const { users, fetched, setAll, remove, create } = useUsersStore();
  const usersQuery = useUsers();

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
    create({
      ...values,
    });
  };

  return (
    // TODO custom noData state
    <>
      <Row>
        <Col span={24}>
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
