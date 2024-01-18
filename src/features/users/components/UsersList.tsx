import * as React from "react";
import { Button, Space, Table } from "antd";
import { User, useUsers } from "../api/getUsers";
import { TableProps } from "antd/es/table";

const UsersList = () => {
  const usersQuery = useUsers();

  if (usersQuery.isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!usersQuery.data) {
    return null;
  }

  const columns: TableProps<User>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (_, { username }) => <code>{username}</code>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { email }) => <code>{email}</code>,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, { id }) => (
        <div key={id}>
          <Button type="primary">Edit</Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table<User>
      dataSource={usersQuery.data}
      columns={columns}
      rowKey={({ id }) => id}
    />
  );
};

export default UsersList;
