import React, {useState} from "react";
import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";
export default function Menu({onClick}) {
  const allCategories=CategoriesList();
  const [selectedMainCategory, setSelectedMainCategory] = useState(
    allCategories[0]
  );
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    allCategories[0].layer1[0]
  );
  const [selectedSubCategory2, setSelectedSubCategory2] = useState(
    allCategories[0].layer1[0].layer2[0]
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
  return (
    <div className=" px-0 d-flex flex-column">
        {allCategories.map((mainCategory, index) => {
          return (
            <Link
            to={mainCategory.link}
              style={{ maxHeight: "53px",textDecoration:'none' }}
              key={index}
              onMouseEnter={() => handleSelectedMainCategory(mainCategory)}
              className={` ${
                mainCategory.title == selectedMainCategory.title
                  ? "selected-category"
                  : "text-secondary"
              } w-100 p-3`}
            >
              {mainCategory.title}
            </Link>
          );
        })}
   
    </div>
  );
}
