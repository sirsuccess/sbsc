import React, { useState } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "./dashboardShell.css";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  HomeOutlined,
  SwapOutlined,
  SendOutlined
} from "@ant-design/icons";

import Profile from "../../features/profile/Profile";

const { Header, Sider } = Layout;
function SiderDemo(props) {
  const InitialCollapsed = false;
  const [collapsedState, setCollapsed] = useState(InitialCollapsed);

  //toggle sidebar
  const toggle = () => {
    setCollapsed(!collapsedState);
  };

  // Route Navbar
  const MenuItemRoute = key => <Redirect push to="/approval" />;

  return (
    <div className="container">
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsedState}
          className="sideBar"
        >
          <div className="logoSec">
            <span className="logo-express">S</span>
            {!collapsedState ? <span>Express Lands</span> : ""}
          </div>
          <Menu
            theme="dark"
            className="Menu"
            mode="inline"
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" className="MenuItem" onClick={MenuItemRoute}>
              <HomeOutlined />
              <span>Dashboard</span>
            </Menu.Item>
            <Menu.Item key="2" className="MenuItem">
              <SendOutlined />
              <span>Budget</span>
            </Menu.Item>
            <Menu.Item key="3" className="MenuItem">
              <SwapOutlined />
              <span>Approvals</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header
            className="site-layout-background header"
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsedState ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle
              }
            )}
            <div className="right-nav">
              <img src="./assets/icons/bell.svg" alt="icon" className="right-nav-img" />
              <Profile />
            </div>
          </Header>

          <div className="content">{props.children}</div>
        </Layout>
      </Layout>
    </div>
  );
}

export default withRouter(SiderDemo);
