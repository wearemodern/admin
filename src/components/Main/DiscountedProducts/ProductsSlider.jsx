import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import RedeemIcon from "@mui/icons-material/Redeem";
import ProductComponent from "./ProductComponent";
import "../../../../css/main/productComponent.css";
export default function ProductsSlider({ products,text }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [view, setView] = useState(null);
  useEffect(() => {
    function updateView() {
      const width = window.innerWidth;
      if (width <= 480) {
        setView(1);
      } else if (width <= 768) {
        setView(2);
      } else if (width <= 1024) {
        setView(2);
      } else {
        setView(4);
      }
    }
    updateView();
    window.addEventListener("resize", updateView);
    return () => {
      window.removeEventListener("resize", updateView);
    };
  }, []);
  return (
    <div className={`d-lg-flex mySwiper align-items-center w-100 h-100 py-1 justify-content-center text-center px-3 py-3 ${text=='محصولات شگفت‌انگیز'?'surprising-Swiper':'popular-Swiper'}`}>
      <div className="h-100 d-flex align-items-center justify-content-center  mx-auto px-3">
        <span
          className="text-white text-center mx-auto pr-4"
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            verticalAlign: "middle",
          }}
        >{text}
          <RedeemIcon style={{ fontSize: "30px", fontWeight: "bold" }} />
        </span>
      </div>
     <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={view}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className=" d-flex justify-content-center align-items-center" 
      >
        <div >
          {products.map((product, index) => {
            return (
              <SwiperSlide
                key={index}
                className="product-card"
              >
                <ProductComponent product={product} isStore={false} />
              </SwiperSlide>
            );
          })}
        </div>
        
      </Swiper>
    </div>
  );
}
