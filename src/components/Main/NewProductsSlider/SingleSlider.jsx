// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-flip';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import '../../../../css/main/newProductsSlider/singleSlider.css'

// // import required modules
// import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

// export default function SingleSlider({products}) {
//   return (
//     <>
//       <Swiper
//         effect={'flip'}
//         grabCursor={true}
//         pagination={true}
//         navigation={true}
//         modules={[EffectFlip, Pagination, Navigation]}
//         className="swiper1"
//         style={{width:'500px',height:'500px'}}
//       >
//       {  products.map((product,index)=>{
//             return(
//                 <SwiperSlide style={{width:'500px',height:'500px'}} className='swiper-slide1' key={index}>
//                 <img src={product.image} className='w-100 h-100 ' />
//               </SwiperSlide>
//             )
//         })}

//       </Swiper>
//     </>
//   );
// }
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../css/main/newProductsSlider/singleSlider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function SingleSlider({ products }) {
  const duplicateProducts = [...products, ...products];
  return (
    <>
      <Swiper
       slidesPerView={1}
       spaceBetween={30}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Pagination, Navigation,Autoplay]}
         className="swiper1"
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {duplicateProducts.map((product, index) => {
          return (
            <SwiperSlide className="swiper-slide1" key={index}>
              <img
                src={product.image}
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
