import React, { useEffect, useState } from "react";
import { Button, Space, Modal, Input, Alert } from "antd";
import "../../../../../src/App.css";
import TGTable from "../../../../components/TGTable";
import { getVendor } from "../actions/vendor";

const Product = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getVendor().then((product) => {
      console.log(product)
      setDataSource(product);
    });
  }, []);

  //   const handleSubmit = () => {};

  const columns = [
    {
      title: "First name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {/* <div style={{ color: "green" }}><EditOutlined /> Edit</div> */}
          <Button
            style={{ color: "red" }}
            // onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
          <Button
            style={{ color: "green" }}
            // onClick={() => handleDelete(record._id)}
          >
            Update
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
export default Product;
