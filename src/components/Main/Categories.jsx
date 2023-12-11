import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../../css/main/categories.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import {
  isMobileOnly,
  isTablet,
  isIPad13,
  isDesktop,
} from "react-device-detect";
export default function Categories() {
  const categories = [
    {
      img: "./abzar.jpg",
      text: "ابزارآلات",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./mashinalat.jpg",
      text: "ماشین‌آلات راه‌سازی",
      hasNewProduct: true,
      hasSeen: true,
    },
    {
      img: "./art.jpg",
      text: "فرهنگ وهنر",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./beauty.jpg",
      text: "زیبایی و بهداشت",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./technology.jpg",
      text: "تکنولوژی",
      hasNewProduct: true,
      hasSeen: false,
    },
    {
      img: "./abzar.jpg",
      text: "ابزارآلات",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./mashinalat.jpg",
      text: "ماشین‌آلات راه‌سازی",
      hasNewProduct: true,
      hasSeen: true,
    },
    {
      img: "./art.jpg",
      text: "فرهنگ وهنر",
      hasNewProduct: false,
      hasSeen: false,
    },
    {
      img: "./beauty.jpg",
      text: "زیبایی و بهداشت",
      hasNewProduct: true,
      hasSeen: false,
    },
    {
      img: "./technology.jpg",
      text: "تکنولوژی",
      hasNewProduct: false,
      hasSeen: false,
    },
  ];
  const [swiperRef, setSwiperRef] = useState(null);
  const view = isMobileOnly ? 3 : isTablet || isIPad13 ? 4 : 6;
  return (
    <div className="d-lg-flex  align-items-center w-100 p-0 bg-white py-5">
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={view}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" d-flex px-5"
      >
        <div className="d-flex ">
          {categories.map((category, index) => {
            return (
              <SwiperSlide key={index} style={{ verticalAlign: "middle" }}>
                <div className="d-flex flex-column justify-content-center">
                  <div
                    className={`${
                      category.hasNewProduct && !category.hasSeen
                        ? "image-container"
                        : category.hasNewProduct && category.hasSeen
                        ? "viewed-image-container"
                        : ""
                    }`}
                  >
                    <img
                      src={category.img}
                      alt=""
                      className={`${
                        category.hasNewProduct ? "active-category" : ""
                      } category-image`}
                    />
                  </div>
                  <span className="category-text mt-2">{category.text}</span>
                </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}
