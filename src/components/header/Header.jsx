import React, { useState } from "react";
import CustomMenu from "./CustomMenu";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import HamburgerMenu from "./HamburgerMenu";
import SubHeader from "./SubHeader";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import "../../../css/header.css";
export default function Header() {
  const [selectedCategory, setSelectedCategory] = React.useState("");
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  const [searchWord, setSearchWord] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const count = 0;
  const handleSearchWord = () => {
    setSearchWord(event.target.value);
  };
  const categories = [
    { value: "", label: "همه" },
    { value: "kitchen", label: "خانه و آشپزخانه" },
    { value: "digital", label: "کالای دیجیتال" },
    { value: "beauty", label: "زیبایی و سلامت" },
    { value: "fashion", label: "مد و پوشاک" },
    { value: "camping", label: "کمپینگ و سفر" },
    { value: "sport", label: "ورزش و سلامتی" },
    { value: "bookcity", label: "شهر کتاب" },
    { value: "tools", label: "دنیای ابزارآلات" },
    { value: "machinery", label: "قطعات ماشین‌آلات و راه‌سازی" },
    { value: "safety", label: "ایمنی" },
    { value: "technology", label: "فناوری نوین" },
  ];
  return (
    <>
      <div className="d-flex p-2 align-items-center header px-3 pl-0 ">
        <img src="" alt="logo" className="col-sm-2  d-none d-sm-block" />
        <div className="d-sm-none col-1 text-right justify-content-start pr-0">
          <HamburgerMenu />
        </div>
        <div className="col-11 col-sm-8 search-box d-flex align-items-center pl-0">
          <Select
            value={selectedCategory}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="h-100 border-left"
            
          >
            {categories.map((item, index) => {
              return (
                <MenuItem value={item.value} key={index}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
          <input
            type="text"
            placeholder="جستجو"
            value={searchWord}
            onChange={handleSearchWord}
            className=" p-1 w-100"
            style={{ border: "none", outline: "none" }}
          />
          <div
            className="bg-orange h-100 d-flex justify-content-center align-items-center mr-auto "
            style={{
              width: "50px",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <SearchIcon className="text-white" style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="text-left mr-auto d-sm-flex justify-content-between align-items-center d-none">
          {isLogin && (
            <div className="pointer">
              <CustomMenu />
            </div>
          )}

          {!isLogin && (
            <div className="mr-3">
              <button className="login-btn p-2">
                ورود و ثبت نام
                <LoginIcon className="mr-1" />
              </button>
            </div>
          )}
          <Link to="./cart" className="mr-3">
            <Badge badgeContent={count} color="warning">
              <i className="bi bi-cart cart-icon text-white"></i>
            </Badge>
          </Link>
        </div>
      </div>
      <SubHeader />
    </>
  );
}
