import React, { lazy } from "react";
const Product = lazy(() => import("../containers/pages/productPage"));
const Category = lazy(() => import("../containers/pages/categoryPage"));
const Login = lazy(() => import("../containers/auth/login"));
const Order = lazy(() =>
  import("../containers/pages/orderPage/components/order")
);
const Vendor = lazy(() => import("../containers/pages/vendorPage"));

export const AllRoutes = [
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/",
    element: <Product />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/vendor",
    element: <Vendor />,
  },

  // {
  //     path: "/login",
  //     element: <Login />
  // },
  {
    path: "*",
    element: <>{"Page coming soon"}</>,
  },
];
