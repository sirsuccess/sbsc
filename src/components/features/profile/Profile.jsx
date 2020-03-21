import React from "react";
import "antd/dist/antd.css";
// import './index.css';
import { Menu, Dropdown } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

import "./Profile.css";
const menu = (
  <Menu>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Log out
      </a>
    </Menu.Item>
    <Menu.Item>
      <a rel="noopener noreferrer" href="#">
        Delete Account
      </a>
    </Menu.Item>
  </Menu>
);

function MenuDropDown() {
  return (
    <div className="profile">
      <Dropdown overlay={menu}>
        <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
          <span>Bidemi Yusuf</span>{" "}
          <CaretDownOutlined style={{ position: "relative", bottom:"-16px" }} />
        </a>
      </Dropdown>
      <br />
      Executive
    </div>
  );
}
export default MenuDropDown;
