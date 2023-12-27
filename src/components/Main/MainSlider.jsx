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
        <SwiperSlide>
          <img className="swiper-image" src="./1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src="./2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="swiper-image" src="./3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
