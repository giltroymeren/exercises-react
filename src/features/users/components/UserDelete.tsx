import * as React from "react";
import { User } from "../types";
import { Button } from "antd";
import NiceModal from "@ebay/nice-modal-react";
import { useUsersStore } from "../../../stores/users";
import SimpleModal from "../../../components/Elements/SimpleModal";
import { useNavigate } from "react-router";

type Props = {
  user: User;
};

const UserDelete = ({ user }: Props) => {
  const navigate = useNavigate();
  const { remove } = useUsersStore();

  return (
    <Button
      danger
      data-test="button-delete"
      onClick={() =>
        NiceModal.show(SimpleModal, {
          title: "Delete User",
          handleSubmit: () => {
            remove(user.id);
            navigate("/");
          },
          submitText: "Delete",
          submitProps: { type: "primary", danger: true },
          children: (
            <>
              Do you want to delete user "<strong>{user.name}</strong>"?
            </>
          ),
        })
      }
    >
      Delete
    </Button>
  );
};

export default UserDelete;
