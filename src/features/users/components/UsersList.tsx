import * as React from "react";
import { Button, Space, Table } from "antd";
import { useUsers } from "../api/getUsers";
import { TableProps } from "antd/es/table";
import { User } from "../types";

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
      render: (_, { company }) => company.name,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, { id }) => (
        <div key={id}>
          <Button type="primary" data-test="button-view">
            View
          </Button>
          <Button data-test="button-edit">Edit</Button>
          <Button danger data-test="button-delete">
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    // TODO custom noData state
    <Table<User>
      dataSource={usersQuery.data}
      columns={columns}
      rowKey={({ id }) => id}
      data-test="table-users"
      rowClassName={({ id }) => `table-users-row-${id}`}
    />
  );
};

export default UsersList;
