import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import type { MenuProps } from "antd";

// const itemsList: { title: string; count: number }[] = [
//   { title: "Applied", count: 546 },
//   { title: "Shortlisted", count: 235 },
//   { title: "Technical Interview", count: 653 },
//   { title: "Opportunity Browsing", count: 564 },
//   { title: "Video Interview I", count: 978 },
//   { title: "Video Interview II", count: 54 },
//   { title: "Video Interview III", count: 54 },
//   { title: "Offer", count: 54 },
//   { title: "Withdrawn", count: 54 },
// ];
const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Applied</p>
        <p style={{ borderRadius: 4, padding: 2, backgroundColor: "#fee" }}>
          1745
        </p>
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Shortlisted</p>
        <p style={{ borderRadius: 4, padding: 2, backgroundColor: "#fee" }}>
          453
        </p>
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a style={{ display: "flex", justifyContent: "space-between" }}>
        <p>Technical Interview</p>
        <p style={{ borderRadius: 4, padding: 2, backgroundColor: "#fee" }}>
          123
        </p>
      </a>
    ),
  },
];
const DropdownMenu = () => {
  return (
    <Dropdown menu={{ items }}>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          Opportunity Browsing
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default DropdownMenu;
