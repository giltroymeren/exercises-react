import * as React from "react";
import { Button, Modal, Table, TableProps } from "antd";
import { useUsers } from "../api/getUsers";
import { User } from "../types";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";
import { useNavigate } from "react-router";
import NiceModal from "@ebay/nice-modal-react";
import SimpleModal from "../../../components/Elements/SimpleModal";

const UsersList = () => {
  const navigate = useNavigate();

  const { users, setAll, remove } = useUsersStore();

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
