import * as React from "react";
import { Button, Space, Table } from "antd";
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
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { email }) => <code>{email}</code>,
    },
    {
      title: "Phone",
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
          <Space size="middle">
            <Button type="primary">Details</Button>
            <Button>Edit</Button>
            <Button danger>Delete</Button>
          </Space>
        </div>
      ),
    },
  ];

  return (
    <Table<User> dataSource={users} columns={columns} rowKey={({ id }) => id} />
  );
};

export default UsersList;
