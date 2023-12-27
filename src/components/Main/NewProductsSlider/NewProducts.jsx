import React from "react";
import ProductCard from "./ProductCard";
export default function NewProducts({ products }) {
  return (
    <div className="d-flex w-100 justify-content-center align-items-center flex-wrap" style={{height:'80%'}}>
      {products.map((item, index) => {
        return (
          <div className="col-6" key={index}>
            <ProductCard product={item} />
          </div>
        );
      })}
    </div>
  );
}
