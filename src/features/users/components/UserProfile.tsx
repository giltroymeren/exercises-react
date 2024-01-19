import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";
import { DescriptionsProps, Descriptions, Button } from "antd";
import { User } from "../types";
import NiceModal from "@ebay/nice-modal-react";
import SimpleModal from "../../../components/Elements/SimpleModal";

const getAndFormatAddress = (user: User) => (
  <>
    {user.address.suite} {user.address.street} Street, {user.address.zipcode}{" "}
    {user.address.city}
  </>
);

const UserProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getById, remove } = useUsersStore();
  const user = getById(Number(id));

  if (!user) {
    return <h3>Error!</h3>;
  }

  const descriptions: DescriptionsProps["items"] = [
    {
      key: "username",
      label: "Username",
      children: <code>{user.username}</code>,
    },
    {
      key: "email",
      label: "Email Address",
      children: <code>{user.email}</code>,
    },
    {
      key: "address",
      label: "Address",
      children: getAndFormatAddress(user),
    },
    {
      key: "phone",
      label: "Contact number",
      children: user.phone,
    },
    {
      key: "company",
      label: "Company",
      children: user.company.name,
    },
  ];

  return (
    <>
      <Descriptions
        title={user.name}
        items={descriptions}
        colon={false}
        column={1}
        size="small"
        bordered
        data-test="container-profile"
      />

      <div>
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
          Delete this user
        </Button>
        <Button onClick={() => navigate("/")}>See all users</Button>
      </div>
    </>
  );
};

export default UserProfile;
