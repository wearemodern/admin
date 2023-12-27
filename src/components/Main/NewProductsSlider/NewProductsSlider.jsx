import React from "react";
import "../../../../css/main/newProductsSlider/newProductsSlider.css";
import SingleSlider from "./SingleSlider";
import NewProducts from "./NewProducts";
export default function NewProductsSlider({ products }) {
  const newProducts = products.slice(0, 4);
  return (
    <div className="newProducts-slider w-100 d-flex flex-column flex-sm-row py-3 py-sm-0">
      <div className="h-100 col-sm-2 col-12  d-flex justify-content-center align-items-center">
        <b
          className="text-dark-blue w-100 h-100 text-center mx-auto py-1 py-sm-0 d-flex justify-content-center align-items-center"
          style={{ fontSize: "25px", verticalAlign: "middle" }}
        >
          محصولات جدید
        </b>
      </div>
      <div className="col-sm-5 col-12">
        <SingleSlider products={newProducts} />
      </div>
      <div className="col-sm-5 col-12">
        <NewProducts products={newProducts} />
      </div>
    </div>
  );
}
