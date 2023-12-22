import React, { useState } from "react";
import "../../../css/header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
export default function SubHeader() {
  const subHeaderItems1 = [
    { text: "فروشگاه", link: "/" },
    { text: "دی‌گرام", link: "/" },
    { text: "درباره ما", link: "/" },
    { text: "ارتباط با ما", link: "/" },
    { text: "راهنما", link: "/" },
    { text: "وبلاگ", link: "/" },
  ];
  const subHeaderItems2 = [
    { text: "در راه", link: "/" },
    { text: "لایو", link: "/" },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const guideOptions = [
    { text: "تضمین خرید", link: "/" },
    { text: "سوالات متداول", link: "/" },
  ];
  return (
    <div className="sub-header d-flex align-items-center justify-content-between px-4">
      <div className="d-flex">
        {subHeaderItems1.map((item, index) => {
          return (
            <div className="text-white p-2 pointer" key={index}>
              {item.text != "راهنما" && (
                <Link className="link-style" to={item.link}>
                  {item.text}
                </Link>
              )}
              {item.text == "راهنما" && (
                <>
                  <span onClick={handleClick} className="link-style">
                    راهنما
                  </span>
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
                          right: 14,
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
                    {guideOptions.map((option, index) => {
                      return (
                        <MenuItem
                          onClick={handleClose}
                          className="menu-item"
                          key={index}
                        >
                          <span className="mr-2">{option.text}</span>
                        </MenuItem>
                      );
                    })}
                  </Menu>
                </>
              )}
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center">
        {subHeaderItems2.map((item, index) => {
          return (
            <Link to={item.link} key={index} className="link-style p-2 d-flex">
              {item.text}
              {item.text == "لایو" && <div className="live-notif mr-1"></div>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
