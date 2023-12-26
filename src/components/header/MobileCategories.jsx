import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import CategoriesList from "./CategoriesList";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import '../../../css/main/categories.css'
export default function TextMobileStepper() {
  const allCategories = CategoriesList();
  const goToSubCategory = (stepNumber) => {
    handleNext();
    setStep(stepNumber);
  };
  const [selectedMainCategory, setSelectedMainCategory] = useState(
    allCategories[0]
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
  const [selectedSubCategory, setSelectedSubCategory] = useState(
    allCategories[0].layer1[0]
  );
  const [selectedSubCategory2, setSelectedSubCategory2] = useState(
    allCategories[0].layer1[0].layer2[0]
  );
  const handleSelectedSubCategory = (subCategory) => {
    setSelectedSubCategory(subCategory);
    if (subCategory.layer2) setSelectedSubCategory2(subCategory.layer2[0]);
  };
  const handleSelectedSubCategory2 = (subCategory) => {
    setSelectedSubCategory2(subCategory);
  };
  const [activeStep, setActiveStep] = useState(0);
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <div>
      <div className=" px-0 d-flex flex-column w-100">
        {step == 1 &&
          allCategories.map((mainCategory, index) => {
            return (
              <span
                style={{ maxHeight: "53px", textDecoration: "none" }}
                key={index}
                onMouseEnter={() => handleSelectedMainCategory(mainCategory)}
                className={` ${
                  mainCategory.title == selectedMainCategory.title
                    ? "selected-category"
                    : "text-secondary"
                } w-100 p-3 justify-content-between d-flex`}
              >
                <Link
                  to="/maincategory"
                  className={` ${
                    mainCategory.title == selectedMainCategory.title
                      ? "selected-category"
                      : "text-secondary"
                  } `}
                >
                  {mainCategory.title}
                </Link>
              { mainCategory && mainCategory.layer1 &&  <span onClick={()=>goToSubCategory(2)}>
                  <ArrowBackIcon />
                </span>}
              </span>
            );
          })}
        {step == 2 &&
          selectedMainCategory &&
          selectedMainCategory.layer1 &&
          selectedMainCategory.layer1.map((subCategory, index1) => {
            return (
              <div
                key={index1}
                className={` ${
                  subCategory.text == selectedSubCategory.text
                    ? "selected-category"
                    : ""
                } w-100 p-3 d-flex justify-content-between`}
                style={{ maxHeight: "53px" }}
                onMouseEnter={() => handleSelectedSubCategory(subCategory)}
              >
              <div className="d-flex">
              <span className="ml-1">{subCategory.icon}</span>
                {subCategory.text}
              </div>
            <div key={index1}>
           { subCategory &&
              subCategory.layer2 && <span onClick={()=>goToSubCategory(3)}>
                  <ArrowBackIcon />
                </span>}
            </div>
              </div>
              
            );
          })}

          {
            step==3 && 
            selectedMainCategory &&
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
              })
          }
      </div>

      <MobileStepper
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        sx={{ maxWidth: 400, flexGrow: 1, color: "#ff6a00" }}
        classes={{
          dotActive: 'text-orange bg-orange',
        }}
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} style={{border:'none',outline:'none'}}>
            <KeyboardArrowRight className="text-orange" />
            <span className="text-orange">قبل</span>
          </Button>
        }
      />
    </div>
  );
}
