import React, { useState } from "react";
import CustomMenu from "./CustomMenu";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import SubHeader from "./SubHeader";
import "../../css/header.css";

export default function Header() {
  const [searchWord, setSearchWord] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const count = 0;
  const handleSearchWord = () => {
    setSearchWord(event.target.value);
  };
  return (
   <>
    <div className="d-flex p-2 align-items-center header px-4 ">
      <img src="" alt="logo" className="col-2" />
      <div className="col-8 search-box d-flex align-items-center">
        <input
          type="text"
          placeholder="جستجو"
          value={searchWord}
          onChange={handleSearchWord}
          className=" p-1 w-100"
          style={{ border: "none", outline: "none" }}
        />
        <SearchIcon className="text-orange" style={{ cursor: "pointer" }} />
      </div>
      <div className="text-left mr-auto d-flex justify-content-between align-items-center">
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
    <SubHeader/>
   </>
  );
}
