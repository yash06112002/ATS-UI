import React from "react";
import {
  BookOutlined,
  ContactsOutlined,
  FileTextOutlined,
  HeartOutlined,
  HomeOutlined,
  LeftOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Menu } from "antd";
import "../styles/menu.css";

function getItem(key, icon) {
  return {
    key,
    icon,
  };
}

function footerItem(key, icon) {
  return {
    key,
    icon,
  };
}

const items = [
  getItem("sub0", <Avatar size={30} />),
  getItem("sub1", <HomeOutlined />),
  getItem("sub2", <ContactsOutlined />),
  getItem("sub3", <ReconciliationOutlined />),
  getItem("sub4", <ShareAltOutlined />),
  getItem("sub5", <FileTextOutlined />),
  getItem("sub6", <BookOutlined />),
  getItem("sub7", <HeartOutlined />),
  getItem("sub8", <LeftOutlined />),
];

const footerItems = [
  footerItem("footer1", <SettingOutlined />),
  footerItem("footer2", <Avatar size={30} />),
];

const MenuComp: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <>
      <div className="dashboard">
        <div className="menu">
          <div className="top">
            <Menu
              onClick={onClick}
              style={{
                width: 80,
                justifyContent: "center",
                margin: "0px",
                padding: "0px",
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </div>
          <div className="foot">
            <Menu
              onClick={onClick}
              style={{
                width: 80,
              }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["footer1lo"]}
              mode="inline"
              items={footerItems}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuComp;
