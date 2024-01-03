import React from "react";
import ProductComponent from "../Main/DiscountedProducts/ProductComponent";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
export default function ProductsList({ products ,mainList}) {
  const [selectedType, setSelectedType] = React.useState("");
  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };
  const types = [
    { value: "", label: "همه" },
    { value: "mostExpensive", label: "گران‌ترین" },
    { value: "cheapest", label: "ارزان‌ترین" },
    { value: "mostVisited", label: "پربازدیدترین" },
    { value: "newest", label: "جدیدترین" },
    { value: "bestSelling", label: "پرفروش‌ترین" },
  ];
  return (
    <div className="d-flex flex-column">
   { mainList &&  <div className="w-100 mt-4 pr-3">
        <Select
          value={selectedType}
          onChange={handleChange}
          displayEmpty
          className="h-100 border-bottom border-secondary"
          style={{ width: "200px" }}
        >
          {types.map((item, index) => {
            return (
              <MenuItem value={item.value} key={index}>
                {item.label}
              </MenuItem>
            );
          })}
        </Select>
      </div>}
      <div className="w-100 h-100 d-flex flex-wrap ">
        {products.map((product, index) => {
          return (
            <div className="col-12 col-md-2 mt-4" key={index}>
              <ProductComponent product={product} isStore={true} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
