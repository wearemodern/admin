import React, { useState } from "react";
import CategoriesList from "./CategoriesList";
import Divider from "@mui/material/Divider";
import "../../../css/main/categories.css";
export default function DesktopCategories() {
  const categories = CategoriesList();
  const [selectedMainCategory, setSelectedMainCategory] = useState(
    categories[0]
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    categories[0].layer1[0]
  );
  const [selectedSubCategory2, setSelectedSubCategory2] = useState(
    categories[0].layer1[0].layer2[0]
  );
  const handleSelectedMainCategory = (category) => {
    setSelectedMainCategory(category);
    if (category.layer1) {
      setSelectedSubCategory(category.layer1[0]);
    }
    if (
      category.layer1 &&
      category.layer1.length &&
      category.layer1[0].layer2
    ) {
      setSelectedSubCategory2(category.layer1[0].layer2[0]);
    }
  };
  const handleSelectedSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    if (subCategory.layer2) setSelectedSubCategory2(subCategory.layer2[0]);
  };
  const handleSelectedSubCategory2 = (subCategory) => {
    setSelectedSubCategory2(subCategory);
  };
  return (
    <div className="w-100 bg-white d-flex mt-3 min-vh-100 h-auto">
      <div className="col-3 d-flex flex-column h-100 w-100 px-0">
        {categories.map((mainCategory, index) => {
          return (
            <span
              style={{ maxHeight: "53px" }}
              key={index}
              onMouseEnter={() => handleSelectedMainCategory(mainCategory)}
              className={` ${
                mainCategory.title == selectedMainCategory.title
                  ? "selected-category"
                  : ""
              } w-100 p-3`}
            >
              {mainCategory.title}
            </span>
          );
        })}
      </div>
      <Divider orientation="vertical" flexItem />
      <div
        className="col-3 d-flex flex-column h-100 w-100 px-0"
        style={{ maxHeight: "53px" }}
      >
        {selectedMainCategory &&
          selectedMainCategory.layer1 &&
          selectedMainCategory.layer1.map((subCategory, index1) => {
            return (
              <span
                key={index1}
                className={` ${
                  subCategory.text == selectedSubCategory.text
                    ? "selected-category"
                    : ""
                } w-100 p-3`}
                style={{ maxHeight: "53px" }}
                onMouseEnter={() => handleSelectedSubCategory(subCategory)}
              >
                <span className="ml-1">{subCategory.icon}</span>
                {subCategory.text}
              </span>
            );
          })}
      </div>
      {selectedMainCategory &&
        selectedMainCategory.layer1 &&
        selectedSubCategory &&
        selectedSubCategory.layer2 && (
          <Divider
            orientation="vertical"
            flexItem
            className="min-vh-80"
            style={{ overflow: "auto", height: "auto" }}
          />
        )}
      <div className=" d-flex flex-column h-100 w-100 px-0">
        {selectedMainCategory &&
          selectedMainCategory.layer1 &&
          selectedSubCategory &&
          selectedSubCategory.layer2 &&
          selectedSubCategory.layer2.map((subCategory2, index2) => {
            return (
              <span
                style={{ maxHeight: "53px" }}
                key={index2}
                className={` ${
                  subCategory2.text == selectedSubCategory2.text
                    ? "selected-category"
                    : ""
                } w-100 p-3`}
                onMouseEnter={() => handleSelectedSubCategory2(subCategory2)}
              >
                {subCategory2.text}
              </span>
            );
          })}
      </div>
    </div>
  );
}
