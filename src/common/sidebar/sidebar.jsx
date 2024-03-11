import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import {
  BgColorsOutlined,
  ContainerOutlined,
  UnderlineOutlined,
  BarsOutlined,
} from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const { Sider } = Layout;

const TGSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const key = location.pathname.replace("/", "");

  const itemsMenu = [
    {
      key: "product",
      label: <Link to="/product">Product</Link>,
      icon: <ContainerOutlined />,
    },
    {
      key: "category",
      label: <Link to="/category">Category</Link>,
      icon: <UnderlineOutlined />,
    },
    {
      key: "order",
      label: <Link to="/order">Orders</Link>,
      icon: <BarsOutlined />,
    },
    {
      key: "vendor",
      label: <Link to="/vendor">Vendor</Link>,
      icon: <BgColorsOutlined />,
    },
  ];

  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{ color: "white", textAlign: "center", alignItems: "center" }}
        >
          <span>Mine Cart</span>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={key}
          mode="inline"
          items={itemsMenu}
        />
      </Sider>
    </>
  );
};

export default TGSidebar;
