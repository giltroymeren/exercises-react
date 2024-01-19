import * as React from "react";
import { useParams } from "react-router";
import { useUsersStore } from "../../../stores/users";
import Spinner from "../../../components/Elements/Spinner";
import { DescriptionsProps, Descriptions, Button } from "antd";
import { User } from "../types";

const getAndFormatAddress = (user: User) => (
  <>
    {user.address.suite} {user.address.street} Street, {user.address.zipcode}{" "}
    {user.address.city}
  </>
);

const UserProfile = () => {
  const { id } = useParams();
  const { getById, loading } = useUsersStore();
  const user = getById(Number(id));

  if (loading) {
    return <Spinner />;
  }

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

      <Button href="/">See all users</Button>
    </>
  );
};

export default UserProfile;
