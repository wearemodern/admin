import React from "react";
import MainSlider from "./MainSlider";
import Categories from "./Categories";
import SpecialProducts from "./specialProducts/SpecialProducts";
import Benefits from "./Benefits";
export default function MainPage() {
  return (
    <div>
      <MainSlider />
      <Categories />
      <SpecialProducts />
      <Benefits />
    </div>
  );
}
