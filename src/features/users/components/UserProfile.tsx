import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { useUsersStore } from "../../../stores/users";
import { DescriptionsProps, Descriptions, Button, Space } from "antd";
import NiceModal from "@ebay/nice-modal-react";
import SimpleModal from "../../../components/Elements/SimpleModal";
import UserUpdate from "./UserUpdate";
import UserDelete from "./UserDelete";

const UserProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getById } = useUsersStore();
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
      children: user.address,
    },
    {
      key: "phone",
      label: "Contact number",
      children: user.phone,
    },
    {
      key: "company",
      label: "Company",
      children: user.company,
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

      <Space>
        <UserUpdate id={user.id} />
        <UserDelete user={user} />
        <Button onClick={() => navigate("/")}>See all users</Button>
      </Space>
    </>
  );
};

export default UserProfile;
