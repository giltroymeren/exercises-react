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
import NotFound from "../../not-found/NotFound";

const UsersList = () => {
  const navigate = useNavigate();

  const { users, fetched, setAll } = useUsersStore();
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
    return <NotFound />;
  }

  if (!users) {
    return null;
  }

  const columns: TableProps<User>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
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
    <div className="section-userlist">
      <Row justify="space-around" align="middle">
        <Col span={12}>
          <h1>Available Customers</h1>
        </Col>
        <Col span={6} offset={6} className="container-create">
          <UserCreate />
        </Col>
      </Row>

      <Table<User>
        dataSource={users}
        columns={columns}
        rowKey={({ id }) => id}
        data-test="table-users"
        rowClassName={({ id }) => `table-users-row-${id}`}
      />
    </div>
  );
};

export default UsersList;
