import React from "react";
import { Link } from "react-router-dom";
import "../../css/main/productComponent.css";
export default function ProductComponent({ product }) {
  return (
    <Link
      style={{ textDecoration: "none" }}
      to={`product/${product.id}`}
      className="text-secondary border border-1 d-flex flex-column justify-content-center align-items-center product-card bg-white text-center mx-auto "
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
        <div>{<b className="m-0">${product.price}</b>}</div>
      </div>
    </Link>
  );
}
