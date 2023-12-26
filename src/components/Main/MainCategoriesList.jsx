import React from 'react'

export default function MainCategoriesList() {
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
  return categories;
}
