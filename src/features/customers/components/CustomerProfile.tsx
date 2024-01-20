import * as React from "react";
import { useNavigate, useParams } from "react-router";
import { useCustomersStore } from "../../../stores/customers";
import { DescriptionsProps, Descriptions, Button, Space, Row, Col } from "antd";
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
      <Row
        justify="space-around"
        align="middle"
        className="container-body-title"
      >
        <Col span={12}>
          <h1>{customer.name}</h1>
        </Col>
        <Col span={6} offset={6} className="container-body-title-buttons">
          <Space>
            <CustomerUpdate id={customer.id} />
            <CustomerDelete customer={customer} />
          </Space>
        </Col>
      </Row>

      <Descriptions
        items={descriptions}
        colon={false}
        column={1}
        size="small"
        bordered
        data-test="container-profile"
      />

      <Row justify="center" align="middle" className="container-body-footer">
        <Col>
          <Button onClick={() => navigate("/")}>See all customers</Button>
        </Col>
      </Row>
    </>
  );
};

export default CustomerProfile;
