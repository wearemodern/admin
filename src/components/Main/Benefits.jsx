import React from "react";
import { useState } from "react";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import "../../../css/main/benefit.css";
export default function Benefits() {
  const benefitItems = [
    {
      img: "./benefit1.jpg",
      title: "انتخاب آسان",
      text: "جستجو و فیلتر کردن میلیون‌ها محصول برای یافتن و عرضه موارد منطبق برای کسب‌ و کارتان .",
      icon: <VerifiedOutlinedIcon />,
    },
    {
      img: "./benefit2.jpg",
      title: "خرید امن",
      text: "کیفیت محصول و قابلیت های آن را می‌توانید از طریق بازرسی های تایید شده و ابزارهای منبع دیجیتال ارزیابی کنید.",
      icon: <SecurityOutlinedIcon />,
    },
    {
      img: "./benefit3.jpg",
      title: "تحویل به موقع",
      text: "تضمین تحویل محصول در 5 الی 7 روز کاری",
      icon: <WatchLaterOutlinedIcon />,
    },
    {
      img: "./benefit4.png",
      title: "پشتیبانی خرید",
      text: "با پشتیبانی پس از فروش از راه‌های مختلف ارتباط داشته باشید",
      icon: <HeadsetMicOutlinedIcon />,
    },
  ];
  const [selected, setSelected] = useState(benefitItems[0]);
  return (
    <div className="d-flex flex-column flex-md-row justify-content-between w-100 h-100 benefits-page">
      <div className="col-md-6">
        {benefitItems.map((item, index) => (
          <div
            className="d-flex align-items-center my-5"
            onMouseEnter={() => setSelected(item)}
            key={index}
          >
            <div
              className={`${
                item.title == selected.title
                  ? "selected-icon ml-4"
                  : "notSelected-icon"
              } ml-2`}
            >
              {item.icon}
            </div>
            <div className="d-flex flex-column">
              <b
                className={`${
                  item.title == selected.title ? "selected-title" : ""
                }`}
              >
                {item.title}
              </b>
              {item.title == selected.title && (
                <span className="text-secondary mt-1">{item.text}</span>
              )}
            </div>
          </div>
        ))}
      </div>
      <img src={selected.img} alt="pic" className="benefit-pic col-md-6" />
    </div>
  );
}
