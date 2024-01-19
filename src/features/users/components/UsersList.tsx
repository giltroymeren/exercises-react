import * as React from "react";
import { Button, Table } from "antd";
import { useUsers } from "../api/getUsers";
import { TableProps } from "antd/es/table";
import { User } from "../types";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";

const UsersList = () => {
  const { users, setAll } = useUsersStore();

  const usersQuery = useUsers();

  React.useEffect(() => {
    if (usersQuery.data) {
      setAll(usersQuery.data);
    }
  }, [usersQuery.data, setAll]);

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
      dataSource={users}
      columns={columns}
      rowKey={({ id }) => id}
      data-test="table-users"
      rowClassName={({ id }) => `table-users-row-${id}`}
    />
  );
};

export default UsersList;
