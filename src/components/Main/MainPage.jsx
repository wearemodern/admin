import React from "react";
import MainSlider from "./MainSlider";
import Categories from "./Categories";
import SpecialProducts from "./specialProducts/SpecialProducts";
import Benefits from "./Benefits";
import QuestionsBox from "./QuestionsBox";
export default function MainPage() {
  return (
    <div>
      <MainSlider />
      <Categories />
      <SpecialProducts />
      <Benefits />
      <QuestionsBox />

    </div>
  );
}
