import { Checkbox } from "antd";
import { Content } from "antd/es/layout/layout";

const StatusBar = () => {
  return (
    <Content style={{ padding: "30px 50px" }}>
      <div
        className="site-layout-content"
        style={{
          display: "flex",
          alignSelf: "stretch",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "auto",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Checkbox />
          <p
            style={{
              color: "#1D4ED8",
              fontWeight: "600",
              lineHeight: "22px",
              fontSize: "14px",
            }}
          >
            247 candidates
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "stretch",
            width: "auto",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", color: "#1D4ED8", fontWeight: "500" }}>
            Qualified
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <p>Task</p>
            <p
              style={{
                fontWeight: "400",
                fontSize: "10px",
                textAlign: "center",
                lineHeight: "22px",
                padding: "3px 4px",
                borderRadius: "40px",
                background: "#F7F8FD",
              }}
            >
              25
            </p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <p>Disqualified</p>
            <p
              style={{
                fontWeight: "400",
                fontSize: "10px",
                textAlign: "center",
                lineHeight: "22px",
                padding: "3px 4px",
                borderRadius: "40px",
                background: "#F7F8FD",
              }}
            >
              78
            </p>
          </div>
        </div>
      </div>
    </Content>
  );
};

export default StatusBar;
