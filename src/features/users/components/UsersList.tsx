import * as React from "react";
import { Button, Col, Row, Space, Table, TableProps } from "antd";
import { useUsers } from "../api/getUsers";
import { User } from "../types";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";
import { useNavigate } from "react-router";
import UserCreate from "./UserCreate";
import UserUpdate from "./UserUpdate";
import UserDelete from "./UserDelete";

const UsersList = () => {
  const navigate = useNavigate();

  const { users, fetched, setAll, remove } = useUsersStore();
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
      render: (_, user) => (
        <Space key={user.id}>
          <Button
            type="primary"
            data-test="button-view"
            onClick={() => navigate(`/user/${user.id}`)}
          >
            View
          </Button>
          <UserUpdate id={user.id} />
          <UserDelete user={user} />
        </Space>
      ),
    },
  ];

  return (
    // TODO custom noData state
    <>
      <Row>
        <Col span={24}>
          <UserCreate />
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
