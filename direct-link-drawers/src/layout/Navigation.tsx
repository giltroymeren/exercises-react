import { Menu, MenuProps } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Paths } from "../utils/paths";

const menuItems: MenuProps["items"] = [
  {
    label: <Link to={Paths.Home}>Home</Link>,
    key: "home",
  },
  {
    label: <Link to={Paths.About}>About</Link>,
    key: "about",
  },
  {
    label: <Link to={Paths.Contact}>Contact</Link>,
    key: "contact",
  },
];

const Navigation: React.FC = () => {
  const [selected, setSelected] = React.useState("home");

  const onClick: MenuProps["onClick"] = (event) => setSelected(event.key);

  return (
    <nav>
      <Menu
        onClick={onClick}
        selectedKeys={[selected]}
        mode="horizontal"
        items={menuItems}
      />
    </nav>
  );
};

export default Navigation;
