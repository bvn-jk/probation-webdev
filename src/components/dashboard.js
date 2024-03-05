import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import ChangePass from "./chpass";
const { Header, Sider, Content } = Layout;
const Dashboard = () => {
  const [current, setCurrent] = useState("1");
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const onClick = (e) => {
    console.log("Clicked ", e.key);
    setCurrent(e.key);
  };
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          onClick={onClick}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "Menu Utama",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "Jadwal",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Ganti Password",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            height: 1000,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
            
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
