import React from "react";
import { Link } from "react-router-dom";
import GridViewIcon from "@mui/icons-material/GridView";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import GroupsIcon from "@mui/icons-material/Groups";
import WebIcon from "@mui/icons-material/Web";
export default function Menu({onClick}) {
  const menuItems = [
    { text: "دسته‌بندی‌ها", icon: <GridViewIcon />, url: "./categories" },
    { text: "فروشگاه", icon: <StorefrontIcon />, url: "./" },
    { text: "درباره ما", icon: <GroupsIcon />, url: "./" },
    { text: "ارتباط با ما", icon: <SupportAgentOutlinedIcon />, url: "./" },
    { text: "راهنما", icon: <HelpOutlineOutlinedIcon />, url: "./" },
    { text: "وبلاگ", icon: <WebIcon />, url: "./" },
  ];
  return (
    <div className="menu">
      <img
        src="/logo.png"
        alt="logo"
        width={45}
        height={45}
        className=" text-center mx-auto my-2"
        style={{ backgroundPosition: "center", backgroundSize: "cover" }}
      />
      {menuItems.map((item, index) => {
        return (
          <Link
            to={item.url}
            style={{ textDecoration: "none" }}
            className="menu-item w-100"
            key={index}
            onClick={onClick}
          >
            <div className="menu-item">
              <span>{item.icon}</span>
              <span className="mr-1">{item.text}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
