import { Layout } from "antd";
const { Header } = Layout;
import DropdownMenu from "./DropdownMenu";
import {
  AudioOutlined,
  DownOutlined,
  MessageOutlined,
  TagOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
} from "@ant-design/icons";

const MainNav1 = () => {
  return (
    <Header
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#F1F1F1",
        justifyContent: "space-between",
      }}
    >
      <DropdownMenu />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
        }}
      >
        <TagOutlined
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            justifyContent: "center",
            borderRadius: "5px",
            padding: "3px",
          }}
        />
        <UserDeleteOutlined
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            justifyContent: "center",
            borderRadius: "5px",
            padding: "3px",
          }}
        />
        <UserAddOutlined
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            justifyContent: "center",
            borderRadius: "5px",
            padding: "3px",
          }}
        />
        <AudioOutlined
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            justifyContent: "center",
            borderRadius: "5px",
            padding: "3px",
          }}
        />
        <MessageOutlined
          style={{
            backgroundColor: "white",
            height: "30px",
            width: "30px",
            justifyContent: "center",
            borderRadius: "5px",
            padding: "3px",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "30px",
          }}
        >
          <span
            style={{
              backgroundColor: "#1D5ECD",
              margin: "0px",
              marginRight: "1px",
              lineHeight: "30px",
              borderTopLeftRadius: "5px",
              borderBottomLeftRadius: "5px",
              color: "white",
              padding: "10px",
              paddingTop: "0px",
              fontSize: "10px",
            }}
          >
            Move to Video Interview
          </span>
          <DownOutlined
            style={{
              backgroundColor: "#1D5ECD",
              borderTopRightRadius: "5px",
              borderBottomRightRadius: "5px",
              color: "white",
              padding: "5px",
              fontSize: "10px",
            }}
          />
        </div>
      </div>
    </Header>
  );
};

export default MainNav1;
