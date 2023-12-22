import React from "react";
import { Link } from "react-router-dom";
import "../../css/main/productComponent.css";
import Chip from "@mui/material/Chip";
export default function ProductComponent({ product }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`product/${product.id}`}
      className="text-secondary border border-1 d-flex flex-column justify-content-center align-items-center product-card bg-white text-center mx-auto py-2"
    >
      <img
        src={product.image}
        alt="product image"
        className=" product-image w-80"
        style={{ aspectRatio: 1 / 1, objectFit: "contain" }}
      />
      <h6 className="text-center p-1 p-sm-3">
        {product.title.length < 45
          ? product.title
          : product.title.slice(0, 45) + "..."}
      </h6>

      <div className="d-flex justify-content-between align-items-center w-100 px-4 w-100">
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
          <div>
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
