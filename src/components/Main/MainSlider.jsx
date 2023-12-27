import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../css/main/mainSlider.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
export default function MainSlider() {
  const banners = [{ src: "./1.jpg" }, { src: "./2.jpg" }, { src: "./3.jpg" }];
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper"
      >
        {banners.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="swiper-image" src={item.src} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
