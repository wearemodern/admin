import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import LogoutIcon from "@mui/icons-material/Logout";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../../css/header.css";
export default function CustomMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const options = [
    { text: "حساب کاربری", icon: "", link: "/" },
    { text: "سفارش‌ها", icon: <ShoppingBasketIcon />, link: "/" },
    { text: "لیست‌ها", icon: <BookmarkBorderIcon />, link: "/" },
    { text: "خروج از حساب", icon: <LogoutIcon />, link: "/" },
  ];
  return (
    <div>
      <PersonIcon className="text-white person-icon" onClick={handleClick} />
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 85,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {options.map((option, index) => {
          return (
            <MenuItem onClick={handleClose} className="menu-item " key={index}>
              <span style={{ fontSize: "14px" }}>{option.icon}</span>
              <span className="mr-2">{option.text}</span>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
