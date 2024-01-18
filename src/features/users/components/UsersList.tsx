import * as React from "react";
import { Button, Space, Table } from "antd";
import { useUsers } from "../api/getUsers";
import { TableProps } from "antd/es/table";
import { User } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { getAllUsers } from "../slice/userSlice";

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { users, loading } = useSelector((state: RootState) => state.users);

  React.useEffect(() => {
    if (!users.length) {
      dispatch(getAllUsers());
    }
  }, [users]);

  if (loading) {
    return <h3>Loading...</h3>;
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
    <Table<User> dataSource={users} columns={columns} rowKey={({ id }) => id} />
  );
};

export default UsersList;
