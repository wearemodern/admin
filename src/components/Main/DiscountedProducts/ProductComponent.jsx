import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../css/main/productComponent.css";
import Chip from "@mui/material/Chip";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import { FaRegComment } from "react-icons/fa";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Timer from "./../../Timer";
export default function ProductComponent({ product, isStore }) {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const likeProduct = () => {
    setIsLiked(true);
  };
  const disLikeProduct = () => {
    setIsLiked(false);
  };
  const saveProduct = () => {
    setIsSaved(true);
  };
  const disSaveProduct = () => {
    setIsSaved(false);
  };
  return (
    <div className="text-secondary d-flex flex-column justify-content-center align-items-center product-card bg-white  w-100 py-2 border border-secondary">
      <img
        src={product.image}
        alt="product image"
        className=" product-image pointer"
        style={{ aspectRatio: 1 / 1, objectFit: "contain" }}
        onClick={() => navigate(`product/${product.id}`)}
      />
      {isStore && (
        <div className="d-flex justify-content-between align-items-center w-100 px-2">
          <div>
            {!isSaved && <BookmarkBorderIcon onClick={saveProduct} />}
            {isSaved && (
              <BookmarkOutlinedIcon
                onClick={disSaveProduct}
                className="text-black"
              />
            )}
          </div>
          <div className="d-flex align-items-center">
            <ShareIcon className="ml-2" />
            <FaRegComment className="ml-2" style={{ fontSize: "20px" }} />
            <div className="d-flex align-items-center">
              {!isLiked && <FavoriteBorderOutlinedIcon onClick={likeProduct} />}
              {isLiked && (
                <FavoriteIcon
                  className="text-danger"
                  onClick={disLikeProduct}
                />
              )}
            </div>
          </div>
        </div>
      )}
      <span className="text-center p-1 p-sm-2 "style={{fontSize:'14px',height:'15%'}} >
        {product.title.length < 30
          ? product.title
          : product.title.slice(0, 30) + "..."}
      </span>
<div style={{height:'20%'}}>
<Timer discounted={product.discounted} />

  
  </div>      <div className="d-flex justify-content-between align-items-center w-100 px-4  mt-3">
        {product.discounted && (
          <div className="d-flex w-100 align-items-center pb-2 justify-content-between">
            <div className=" text-left  px-1">
              <Chip className="bg-danger text-white text-left" label="20%" />
            </div>
            <div>
              <div
                className="d-flex"
                style={{ position: "absolute", bottom: "30px", left: "40px" }}
              >
                <b className="px-2">{Math.floor(product.price * 0.8)}</b>
                <span style={{ fontSize: "14px" }}>تومان</span>
              </div>
              <del
                style={{ position: "absolute", bottom: "10px", left: "50px" }}
              >
                {product.price}
              </del>
            </div>
          </div>
        )}
        {!product.discounted && (
          <div
            className="text-left mr-auto"
            style={{ position: "absolute", bottom: "10px", left: "40px" }}
          >
            <b className="m-0">{product.price}</b>
            <span className="mr-1" style={{ fontSize: "14px" }}>
              تومان
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
