import React from "react";
import { Layout } from "antd";
import MainNav1 from "./MainNav1";
import StatusBar from "./StatusBar";

const MainContent: React.FC = () => {
  return (
    <Layout className="layout">
      <MainNav1 />
      <StatusBar />
    </Layout>
  );
};

export default MainContent;
