import React from "react";
import { Link } from "react-router-dom";
export default function FooterCol2() {
  const links = [
    { text: "دسته‌بندی‌های برتر", link: "/" },
    { text: "پربازدیدترین محصولات", link: "/" },
    { text: "تخفیف‌های ویژه این هفته", link: "/" },
    { text: "محصولات جدید این هفته", link: "/" },
    { text: "محبوب‌ترین محصولات", link: "/" },
  ];
  return (
    <div className="d-flex flex-column align-items-center justify-content-center me-lg-1 mr-lg-1 col-12 col-md-3 mt-4 mt-sm-0 w-100">
      {links.map((item, index) => {
        return (
          <Link
            className="fs-small mt-2 w-100 text-center mx-auto text-secondary link-style"
            key={index}
            to={item.link}
          >
            {item.text}
          </Link>
        );
      })}
    </div>
  );
}
