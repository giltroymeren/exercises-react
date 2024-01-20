import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { useCustomersStore } from "../../../stores/customers";
import { DescriptionsProps, Descriptions, Button, Space } from "antd";
import CustomerUpdate from "./CustomerUpdate";
import CustomerDelete from "./CustomerDelete";
import NotFound from "../../not-found/NotFound";

const CustomerProfile = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const { getById } = useCustomersStore();
  const customer = getById(Number(id));

  if (!customer) {
    return <NotFound />;
  }

  const descriptions: DescriptionsProps["items"] = [
    {
      key: "username",
      label: "Username",
      children: <code>{customer.username}</code>,
    },
    {
      key: "email",
      label: "Email Address",
      children: <code>{customer.email}</code>,
    },
    {
      key: "address",
      label: "Address",
      children: customer.address,
    },
    {
      key: "phone",
      label: "Contact number",
      children: customer.phone,
    },
    {
      key: "website",
      label: "Website",
      children: customer.website,
    },
    {
      key: "company",
      label: "Company",
      children: customer.company,
    },
  ];

  return (
    <>
      <Descriptions
        title={customer.name}
        items={descriptions}
        colon={false}
        column={1}
        size="small"
        bordered
        data-test="container-profile"
      />

      <Space>
        <CustomerUpdate id={customer.id} />
        <CustomerDelete customer={customer} />
        <Button onClick={() => navigate("/")}>See all customers</Button>
      </Space>
    </>
  );
};

export default CustomerProfile;
