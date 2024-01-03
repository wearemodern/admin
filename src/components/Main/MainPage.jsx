import React, { useState, useEffect } from "react";
import MainSlider from "./MainSlider";
import Categories from "./Categories";
import ProductsSlider from "./DiscountedProducts/ProductsSlider";
import Benefits from './Benefits'
import axios from "axios";
import "../../../css/main/productComponent.css";
import NewProductsSlider from './NewProductsSlider/NewProductsSlider'
import Vr from "./vr";
export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    let response = await axios.get("https://fakestoreapi.com/products");
    try {
      if (response.status == 200) {
        response.data.map((element) => (element.discounted = false));
        const products1=response.data.splice(0,7);
        const arr = response.data;
        arr.map((element) => (element.discounted = true));
        setProducts(products1)
        setDiscountedProducts(arr);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-white">
      <MainSlider />
      <Categories />
      <ProductsSlider products={discountedProducts} text={"محصولات شگفت‌انگیز"}/>
      <Benefits/>
      <NewProductsSlider  products={discountedProducts}/>
<div className="mt-3">
<ProductsSlider products={products} text={"محصولات محبوب"}/>
</div>
<Vr/>
    </div>
  );
}
