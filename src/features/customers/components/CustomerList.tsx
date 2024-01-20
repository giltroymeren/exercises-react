import * as React from "react";
import { Button, Col, Row, Space, Table, TableProps } from "antd";
import { useCustomers } from "../api/getCustomers";
import { Customer } from "../types";
import { useCustomersStore } from "../../../stores/customers";
import Spinner from "../../../components/Elements/Spinner/Spinner";
import { useNavigate } from "react-router";
import CustomerCreate from "./CustomerCreate";
import CustomerUpdate from "./CustomerUpdate";
import CustomerDelete from "./CustomerDelete";
import NotFound from "../../not-found/NotFound";
import { Link } from "react-router-dom";

const CustomersList = () => {
  const navigate = useNavigate();

  const { customers, fetched, setAll } = useCustomersStore();
  const customersQuery = useCustomers();

  React.useEffect(() => {
    if (customersQuery.data && !fetched) {
      setAll(customersQuery.data);
    }
  }, [customersQuery.data]);

  if (customersQuery.isLoading) {
    return <Spinner />;
  }

  if (customersQuery.isError) {
    return <NotFound />;
  }

  if (!customers) {
    return null;
  }

  const columns: TableProps<Customer>["columns"] = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, { id, name }) => <Link to={`/customer/${id}`}>{name}</Link>,
      sorter: (a, b) => a.name.localeCompare(b.name),
      sortDirections: ["ascend", "descend"],
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
      render: (_, { company }) => company,
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, customer) => (
        <Space key={customer.id}>
          <CustomerUpdate id={customer.id} />
          <CustomerDelete customer={customer} />
        </Space>
      ),
    },
  ];

  return (
    // TODO custom noData state
    <div className="section-list">
      <Row
        justify="space-around"
        align="middle"
        className="container-body-title"
      >
        <Col span={12}>
          <h1>Available Customers</h1>
        </Col>
        <Col span={6} offset={6} className="container-body-title-buttons">
          <CustomerCreate />
        </Col>
      </Row>

      <Table<Customer>
        dataSource={customers}
        columns={columns}
        rowKey={({ id }) => id}
        data-test="table-customers"
        rowClassName={({ id }) => `table-customers-row-${id}`}
      />
    </div>
  );
};

export default CustomersList;
