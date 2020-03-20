import React from "react";
import "antd/dist/antd.css";
// import './index.css';
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        
        rel="noopener noreferrer"
        href="#"
      >
        Log out
      </a>
    </Menu.Item>
    <Menu.Item>
      <a  rel="noopener noreferrer" href="#">
        Delete Account
      </a>
    </Menu.Item>
  </Menu>
);

function MenuDropDown() {
  return (
      <>
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        Bidemi Yusuf <DownOutlined />
      </a>
    </Dropdown>
      Executive
    </>
  );
}
export default MenuDropDown;
