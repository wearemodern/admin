import React, { useState, useEffect } from "react";
import MainSlider from "./MainSlider";
import Categories from "./Categories";
import ProductsSlider from "./DiscountedProducts/ProductsSlider";
import Benefits from './Benefits'
import axios from "axios";
import "../../../css/main/productComponent.css";
import NewProductsSlider from './NewProductsSlider/NewProductsSlider'
export default function MainPage() {
  const [loading, setLoading] = useState(false);
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    let response = await axios.get("https://fakestoreapi.com/products");
    try {
      if (response.status == 200) {
        response.data.map((element) => (element.discounted = false));
        const arr = response.data;
        arr.map((element) => (element.discounted = true));
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
      <ProductsSlider products={discountedProducts} />
      <Benefits/>
      <NewProductsSlider  products={discountedProducts}/>
    </div>
  );
}
