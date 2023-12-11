import React from "react";
import { useNavigate } from "react-router-dom";
export default function NewProduct({ product }) {
  const navigate = useNavigate();

  return (
    <div className="h-100">
      <div className=" d-flex justify-content-between my-2 align-items-center  ">
        <b>محصولات جدید</b>
        {
          <button onClick={() => navigate("/")} className="orange-btn">
            مشاهده بیشتر
            <i className="bi bi-arrow-left text-white mr-1"></i>
          </button>
        }
      </div>
      <div className="py-2 w-100 " style={{ height: "90%" }}>
        <img src={product.img} alt="" className="w-100 h-100" />
      </div>
    </div>
  );
}
