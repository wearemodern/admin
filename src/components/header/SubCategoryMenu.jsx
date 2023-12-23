import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "../../../css/header.css";
export default function SubCategoryMenu({category}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 
  return (
    <div onClick={handleClick}>
      <span onMouseEnter={handleClick}>{category.title}</span>
      <Menu
       PaperProps={{
        style: {
          left: '50%',
          transform: 'translateX(-90%) translateY(-10%)',
        }
      }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
     
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {category && category.layer1 && category.layer1.map((subCategory, index) => {
          return (
            <MenuItem onClick={handleClose} className="menu-item " key={index}>
              <span className="mr-2">{subCategory.text}</span>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
