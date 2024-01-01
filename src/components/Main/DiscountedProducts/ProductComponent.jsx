import React from "react";
import { Link } from "react-router-dom";
import "../../../../css/main/productComponent.css";
import Chip from "@mui/material/Chip";
export default function ProductComponent({ product }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`product/${product.id}`}
      className="text-secondary d-flex flex-column justify-content-center align-items-center product-card bg-white  w-100 py-2"
    >
      <img
        src={product.image}
        alt="product image"
        className=" product-image w-75"
        style={{ aspectRatio: 1 / 1, objectFit: "contain" }}
      />
      <span className="text-center p-1 p-sm-3" style={{ fontSize: "12px" }}>
        {product.title.length < 30
          ? product.title
          : product.title.slice(0, 30) + "..."}
      </span>

      <div className="d-flex justify-content-between align-items-center w-100 px-4 ">
        {product.discounted && (
          <div className="d-flex w-100 align-items-center pb-2 justify-content-between">
            <div className=" text-left  px-1">
              <Chip className="bg-danger text-white text-left" label="20%" />
            </div>
            <div>
              <div className="d-flex">
                <b className="px-2">{Math.floor(product.price * 0.8)}</b>
                <span style={{ fontSize: "14px" }}>تومان</span>
              </div>
              <del>{product.price}</del>
            </div>
          </div>
        )}
        {!product.discounted && (
          <div className="text-left mr-auto">
            <b className="m-0">{product.price}</b>
            <span className="mr-1" style={{ fontSize: "14px" }}>
              تومان
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
