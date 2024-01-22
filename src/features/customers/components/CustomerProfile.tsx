import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { DescriptionsProps, Descriptions, Button, Space, Row, Col } from "antd";
import CustomerUpdate from "./CustomerUpdate";
import CustomerDelete from "./CustomerDelete";
import { useCustomersStore } from "@/stores/customers";
import NotFound from "@/features/not-found/NotFound";

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
      key: "id",
      label: "Customer ID",
      children: (
        <span data-testid="customer-profile-id">
          <code>{customer.id}</code>
        </span>
      ),
    },
    {
      key: "username",
      label: "Username",
      children: (
        <span data-testid="customer-profile-username">
          <code>{customer.username}</code>
        </span>
      ),
    },
    {
      key: "email",
      label: "Email Address",
      children: (
        <span data-testid="customer-profile-email">
          <code>{customer.email}</code>
        </span>
      ),
    },
    {
      key: "address",
      label: "Address",
      children: (
        <span data-testid="customer-profile-address">{customer.address}</span>
      ),
    },
    {
      key: "phone",
      label: "Contact number",
      children: (
        <span data-testid="customer-profile-phone">{customer.phone}</span>
      ),
    },
    {
      key: "website",
      label: "Website",
      children: (
        <span data-testid="customer-profile-website">{customer.website}</span>
      ),
    },
    {
      key: "company",
      label: "Company",
      children: (
        <span data-testid="customer-profile-company">{customer.company}</span>
      ),
    },
  ];

  return (
    <div data-testid="container-profile">
      <Row
        justify="space-around"
        align="middle"
        className="container-body-title"
      >
        <Col span={12}>
          <h1 data-testid="customer-profile-name">{customer.name}</h1>
        </Col>
        <Col span={6} offset={6} className="container-body-title-buttons">
          <Space>
            <CustomerUpdate id={customer.id} />
            <CustomerDelete id={customer.id} name={customer.name} />
          </Space>
        </Col>
      </Row>

      <Descriptions
        items={descriptions}
        colon={false}
        column={1}
        size="small"
        bordered
        data-testid="container-profile-details"
      />

      <Row justify="center" align="middle" className="container-body-footer">
        <Col>
          <Button onClick={() => navigate("/")} data-testid="button-home">
            See all customers
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default CustomerProfile;
