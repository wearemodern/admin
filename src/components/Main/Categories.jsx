import "../../../css/main/categories.css";
import MainCategoriesList from "./MainCategoriesList";
export default function Categories() {
  const categories=MainCategoriesList()
  return (
    <div className="d-lg-flex  align-items-center categories-main-page justify-content-center mx-auto p-0 bg-white py-5">
      <div className="d-flex w-100 justify-content-center   flex-wrap align-items-center">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              style={{ verticalAlign: "middle" }}
              className="col-4 col-sm-2 mt-3 d-flex flex-column justify-content-center "
            >
              {/* category img */}
              <div
                className={`${
                  category.hasNewProduct && !category.hasSeen
                    ? "image-container"
                    : "viewed-image-container "
                } d-flex flex-column justify-content-center align-items-center text-center mx-auto`}
              >
                <img
                  src={category.img}
                  alt="category-img"
                  className=" category-image active-category"
                  
                />
              </div>
              {/*category name  */}
              <span className="category-text mt-2 text-center">
                {category.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
