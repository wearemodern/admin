import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
    const categories=[
        {img:'./abzar.jpg',text:'ابزارآلات'},
        {img:'./mashinalat.jpg',text:'ماشین‌آلات راه‌سازی'},
        {img:'./art',text:'فرهنگ وهنر'},
        {img:'./beauty',text:'زیبایی و بهداشت'},
        {img:'./technology',text:'تکنولوژی'},
]
  const [swiperRef, setSwiperRef] = useState(null);
  const view = isMobileOnly ? 3 : isTablet || isIPad13 ? 4: isDesktop?5:6;
  return (
    <div className="d-lg-flex mySwiper align-items-center w-100 p-0">
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
              <SwiperSlide
                key={index}
                className="col-3 "
                style={{ verticalAlign: "middle" }}
              >
           <div>
            <img src={category.img} alt=""className="categoryImg" />
            <span>{category.text}</span>
           </div>
              </SwiperSlide>
            );
          })}
        </div>
      </Swiper>
    </div>
  );
}