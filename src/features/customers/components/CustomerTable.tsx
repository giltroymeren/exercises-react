import * as React from "react";
import {
  Col,
  ConfigProvider,
  Empty,
  Row,
  Space,
  Table,
  TableProps,
} from "antd";
import { useCustomers } from "../api/getCustomers";
import { Customer } from "../types";
import { useCustomersStore } from "../../../stores/customers";
import Spinner from "../../../components/Elements/Spinner/Spinner";
import CustomerCreate from "./CustomerCreate";
import CustomerUpdate from "./CustomerUpdate";
import CustomerDelete from "./CustomerDelete";
import { Link } from "react-router-dom";
import NotFound from "@/features/not-found/NotFound";

const CustomerTable = () => {
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
      render: (_, { id, name }) => (
        <Link to={`/customer/${id}`} data-testid="table-customers-name">
          {name}
        </Link>
      ),
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
          <CustomerDelete id={customer.id} name={customer.name} />
        </Space>
      ),
    },
  ];

  return (
    <div className="section-table" data-testid="section-table">
      <Row
        justify="space-around"
        align="middle"
        className="container-body-title"
        data-testid="container-body-title"
      >
        <Col span={12}>
          <h1>Available Customers</h1>
        </Col>
        <Col span={6} offset={6} className="container-body-title-buttons">
          <CustomerCreate />
        </Col>
      </Row>

      <ConfigProvider renderEmpty={() => <EmptyTable />}>
        <Table<Customer>
          dataSource={customers}
          columns={columns}
          rowKey={({ id }) => id}
          data-testid="table-customers"
        />
      </ConfigProvider>
    </div>
  );
};

const EmptyTable = () => (
  <Empty
    data-testid="table-customers-empty"
    description={<span>No customers available</span>}
  />
);

export default CustomerTable;
