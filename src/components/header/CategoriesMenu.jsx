import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SubCategoryMenu from "./SubCategoryMenu";
import CategoriesList from "./CategoriesList";
export default function CategoriesMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const categories = CategoriesList();
  const [selectedCategory, setSelectedCategory] = useState("");
  const handleSelectedCategory = (item) => {
    if (item != selectedCategory) {
      setSelectedCategory(item);
    }
  };
  return (
    <div onClick={handleClick}>
      <span onMouseEnter={handleClick}>دسته‌بندی‌ها</span>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
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
              right: 15,
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
        {categories.map((category, index) => {
          return (
            <MenuItem
              onClick={handleClose}
              className="menu-item"
              key={index}
              onMouseEnter={() => handleSelectedCategory(category)}
            >
              <span onMouseEnter={handleClick}>{category.title}</span>

              <SubCategoryMenu // Corrected component name
                category={category}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleSelectedCategory}
              />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
