import React from "react";
import {
  ExclamationCircleOutlined,
  FileTextOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu, Space, Typography, Input } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const { Title } = Typography;

const items: MenuProps["items"] = [
  getItem("Personal Information", "sub1", <FileTextOutlined />, [
    getItem("Option 1", "1"),
    getItem("Option 2", "2"),
  ]),

  getItem("Education", "sub2", <FileTextOutlined />, [
    getItem("Option 3", "3"),
    getItem("Option 4", "4"),
  ]),

  getItem("Work Experience", "sub3", <FileTextOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
  ]),
  getItem("Activity Filter", "sub4", <FileTextOutlined />, [
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),

  getItem("Advanced Filter", "sub5", <FileTextOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
  ]),
];

const Nav2: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Space
      direction="vertical"
      size="large"
      style={{ width: 300, margin: 10, rowGap: 10 }}
    >
      <Title
        level={5}
        style={{
          paddingLeft: 8,
          height: 20,
          marginBottom: 0,
          marginTop: 10,
          color: "#1D4ED8",
          fontWeight: "bold",
        }}
      >
        London Internship Program
      </Title>
      <p
        style={{ paddingLeft: 8, paddingTop: 8, marginTop: 0, marginBottom: 0 }}
      >
        London
      </p>
      <Input
        placeholder="Search by name, edu, exp or #tag"
        prefix={<SearchOutlined />}
        suffix={<ExclamationCircleOutlined />}
        style={{ width: "95%", padding: 12, marginLeft: 15, marginTop: 20 }}
      />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ textAlign: "center", paddingLeft: 30 }}>Filters</p>
        <p
          style={{
            textAlign: "center",
            paddingRight: 10,
            fontWeight: 100,
            fontSize: 14,
          }}
        >
          0 Selected
        </p>
      </div>
      <Menu
        title=""
        onClick={onClick}
        style={{ width: 300 }}
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Space>
  );
};

export default Nav2;
