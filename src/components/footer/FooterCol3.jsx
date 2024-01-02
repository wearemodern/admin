import React from "react";

export default function FooterCol3() {
  const pics = [
    { text: "بازار", src: "./bazar.jpg", alt: "bazar" },
    { text: "مایکت", src: "./myket.png", alt: "myket" },
    { text: "اپ استور", src: "./appStore.jpg", alt: "appstore" },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center me-lg-1 mr-lg-1 col-12 col-md-3 mt-4 mt-sm-0 w-100">
      <span className="fs-small mt-2 w-100 text-center mx-auto text-secondary">
        دانلود اپلیکیشن
      </span>
      <div>
        {pics.map((item, index) => {
          return (
            <div
              key={index}
              className="fs-small mt-2 w-100 text-center mx-auto text-secondary"
            >
              <span className="text-secondary">{item.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
