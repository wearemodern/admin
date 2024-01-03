import React from "react";
import Categories from "./../Main/Categories";
export default function CategoryPage() {
    const subCategories=[]
  return (
    <div className="w-100 min-vh-100">
      <img src="./1.jpg" alt="" className="w-100" style={{ height: "400px" }} />
      <Categories categories={subCategories} />
    </div>
  );
}
