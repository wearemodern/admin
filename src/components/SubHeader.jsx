import React, { useState } from "react";
import "../../css/header.css";
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
    <div className="sub-header d-flex align-items-center justify-content-between px-4" >
      <div className="d-flex">
      {subHeaderItems1.map((item, index) => {
        return (
          <div className="text-white p-2 pointer" key={index}>
            {item.text != "راهنما" && <Link className="link-style" to={item.link}>{item.text}</Link>}
            {item.text == "راهنما" && (
              <>
                <span onClick={handleClick} className="link-style">راهنما</span>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                  disableScrollLock={true}
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
      })}</div>
   <div className="d-flex">
   {  subHeaderItems2.map((item,index)=>{
        return(
            <Link to={item.link} key={index} className="link-style p-2">
                {item.text}
            </Link>
        )
    })}</div>
    </div>
  );
}
