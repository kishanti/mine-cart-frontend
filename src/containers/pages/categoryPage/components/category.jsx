import React, { useEffect, useState } from "react";
import { Button, Space, Modal, Input, Alert } from "antd";
import "../../../../../src/App.css";
import TGTable from "../../../../components/TGTable";
import { getCategory } from "../actions/category";

const Category = () => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getCategory().then((category) => {
      setDataSource(category);
    });
  }, []);

  //   const handleSubmit = () => {};

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <span style={{ color: text ? "green" : "red" }}>
          {text ? "Active" : "Inactive"}
        </span>
      ),
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
export default Category;
