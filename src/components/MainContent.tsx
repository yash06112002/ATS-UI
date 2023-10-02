import React from "react";
import { Card, Layout } from "antd";
import MainNav1 from "./MainNav1";
import StatusBar from "./StatusBar";
import CardComp from "./Card";

const MainContent: React.FC = () => {
  return (
    <Layout className="layout">
      <MainNav1 />
      <StatusBar />
      <CardComp />
      <CardComp />
    </Layout>
  );
};

export default MainContent;
