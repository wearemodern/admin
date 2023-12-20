import React, { useState } from "react";
import "../../../css/main/categories.css";
export default function Categories() {
  const categories = [
    {
      img: "./kitchen.jpg",
      text: "خانه و آشپزخانه",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./technology.jpg",
      text: "کالای دیجیتال",
      hasNewProduct: true,
      hasSeen: true,
    },
    {
      img: "./beauty.jpg",
      text: "زیبایی و سلامت",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./shoes.jpg",
      text: "مد و پوشاک",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./camping.jpg",
      text: "کمپینگ و سفر",
      hasNewProduct: true,
      hasSeen: false,
    },
    {
      img: "./sport.jpg",
      text: "ورزش و سرگرمی",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./art.jpg",
      text: "شهر کتاب",
      hasNewProduct: true,
      hasSeen: true,
    },
    {
      img: "./abzar.jpg",
      text: "دنیای ابزارآلات",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./mashinalat.jpg",
      text: "قطعات ماشین‌آلات و راه‌سازی ",
      hasNewProduct: true,
      hasSeen: false,
    },
    {
      img: "./imani.jpg",
      text: "ایمنی",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./IT.jpg",
      text: "فناوری‌های نوین",
      hasNewProduct: false,
      hasSeen: false,
    },
  ];
  return (
    <div className="d-lg-flex  align-items-center w-75 justify-content-center mx-auto p-0 bg-white py-5">
      <div className="d-flex w-100 justify-content-center   flex-wrap align-items-center">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              style={{ verticalAlign: "middle" }}
              className="col-4 col-sm-2 mt-3 d-flex flex-column justify-content-center "
            >
              {/* category img */}
              <div
                className={`${
                  category.hasNewProduct && !category.hasSeen
                    ? "image-container"
                    : "viewed-image-container "
                } d-flex flex-column justify-content-center align-items-center text-center mx-auto`}
              >
                <img
                  src={category.img}
                  alt="category-img"
                  className=" category-image active-category"
                  
                />
              </div>
              {/*category name  */}
              <span className="category-text mt-2 text-center">
                {category.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
