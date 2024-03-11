import React, { useEffect, useState } from "react";
import { Button, Space, Modal, Input, Alert } from "antd";
import "../../../../../src/App.css";
import TGTable from "../../../../components/TGTable";
import { getOrder } from "../actions/order";

const Order = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getOrder().then((order) => {
      setDataSource(order);
      console.log(order);
    });
  }, []);

  //   const handleSubmit = () => {};

  const columns = [
    {
      title: "Buyer name",
      dataIndex: "buyer_name",
      key: "buyer_name",
    },
    {
      title: "Seller name",
      dataIndex: "vendor_name",
      key: "vendor_name",
    },
    {
      title: "Net amount",
      dataIndex: "net_amount",
      key: "net_amount",
    },
    {
      title: "Address",
      dataIndex: "addresses",
      key: "addresses",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <div style={{ color: "green" }}><EditOutlined /> Edit</div> */}
          <Button
            style={{ color: "green" }}
            // onClick={() => handleDelete(record._id)}
          >
            view orders
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];

  return (
    <>
      <TGTable columns={columns} dataSource={dataSource} loading={"loading"} />
    </>
  );
};
export default Order;
