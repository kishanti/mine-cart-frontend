import React, { Suspense } from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { AllRoutes } from "./routes/route";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TGHeader from "./common/header";
import Sidebar from "./common/sidebar";
import TGFooter from "./common/footer";

const { Content } = Layout;

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Sidebar />
        <Layout className="site-layout">
          <TGHeader />
          <Content style={{ padding: "16px" }}>
            <Routes>
              {AllRoutes.map((route) => {
                return (
                  <Route exact path={route.path} element={route.element} />
                );
              })}
            </Routes>
          </Content>
          <TGFooter />
        </Layout>
      </Layout>
    </Suspense>
  );
};
export default App;
