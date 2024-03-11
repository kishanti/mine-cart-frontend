import React, { useEffect, useState } from "react";
import { Button, Space, Modal, Input, Form } from "antd";
import "../../../../../src/App.css";
import TGTable from "../../../../components/TGTable";
import {
  getProduct,
  deleteProduct,
  updateProduct,
  getByIdProduct,
} from "../actions/product";
import { toast } from "react-toastify";

const Product = () => {
  const [dataSource, setDataSource] = useState([]);
  const [productDetails, setProductDetails] = useState({});
  const [imageUrl, setImageUrl] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productId, setProductId] = useState("");
  let updateId = "";
  useEffect(() => {
    getProduct().then((product) => {
      setImageUrl(product.imageUrl);
      setDataSource(product.getAllProduct);
    });
  }, []);

  const handleDelete = (id) => {
    deleteProduct(id).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const updatedDataSource = dataSource.filter(
          (product) => product._id !== id
        );
        setDataSource(updatedDataSource);
        toast.success(response?.message);
      }
    });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "product_image", // Use the new imageUrl property
      key: "product_image",
      render: (image, record) => {
        return <img height={70} src={`${imageUrl}products/${image}`} />;
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            style={{ color: "red" }}
            onClick={() => handleDelete(record._id)}
          >
            Delete
          </Button>
          <Button
            style={{ color: "green" }}
            onClick={() => showModal(record._id)}
          >
            Update
          </Button>
        </Space>
      ),
      align: "center",
    },
  ];

  const showModal = (id) => {
    getByIdProduct(id).then((product) => {
      setProductDetails(product[0]);
      setIsModalOpen(true);
      setProductId(id);
    });
  };
  const handleOk = () => {
    console.log(productId, productDetails);
    updateProduct(productId, productDetails).then((response) => {
      console.log(response);
      if (response.status === 200) {
        const updatedDataSource = dataSource.map((product) =>
          product._id === productId ? response.data : product
        );
        setDataSource(updatedDataSource);
        toast.success(response?.message);
      }
    });
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values) => {
    console.log(values);
    // Perform your update logic here
  };

  return (
    <>
      <Modal
        title="Basic Modal"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form name="updateProductForm" onFinish={onFinish}>
          <Form.Item label="Name">
            <Input
              placeholder="name"
              value={productDetails?.name}
              onChange={handleChange}
              name="name"
            />
          </Form.Item>
          <Form.Item label="Price">
            <Input
              placeholder="price"
              value={productDetails?.price}
              onChange={handleChange}
              name="price"
            />
          </Form.Item>
          <Form.Item label="Description">
            <Input
              placeholder="description"
              value={productDetails?.description}
              onChange={handleChange}
              name="description"
            />
          </Form.Item>
          <Form.Item label="Image">
            <Input
              type="file"
              value={productDetails?.image}
              onChange={handleChange}
              name="image"
            />
          </Form.Item>
        </Form>
      </Modal>
      <TGTable columns={columns} dataSource={dataSource} loading={"loading"} />
    </>
  );
};

export default Product;
