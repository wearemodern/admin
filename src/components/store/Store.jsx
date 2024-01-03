import React, { useState, useEffect } from "react";
import "../../../css/store/store.css";
import axios from "axios";
import Categories from "../Main/Categories";
import ProductsList from "./ProductsList";
import ProductsSlider from "../Main/DiscountedProducts/ProductsSlider";
import NewProductsSlider from "../Main/NewProductsSlider/NewProductsSlider";
import { ImEye } from "react-icons/im";

export default function Store() {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const fetchProducts = async () => {
    setLoading(true);
    let response = await axios.get("https://fakestoreapi.com/products");
    try {
      if (response.status == 200) {
        const allProducts1 = [...response.data];
        setAllProducts(allProducts1);
        response.data.map((element) => (element.discounted = false));
        const products1 = response.data.splice(0, 7);
        const arr = response.data;
        arr.map((element) => (element.discounted = true));
        setProducts(products1);
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
    <div className="store-page">
      <img src="./1.jpg" alt="" className="store-banner" />
      <Categories />
      <ProductsSlider
        products={discountedProducts}
        text={"محصولات شگفت‌انگیز"}
      />
      <NewProductsSlider products={discountedProducts} />
      <ProductsSlider products={products} text={"محصولات پرفروش"} />
      <ProductsList products={allProducts} mainList={true}/>
      <div className="mt-3">
        <ProductsSlider products={products} text={"جست‌و‌جوی اخیر شما "} />
      </div>
      <div className="mt-3 d-flex flex-column">
<h5 className="pr-3 text-orange pb-0 mb-0" style={{fontWeight:'600'}}>
<ImEye className="ml-1"/>

آن چه شما دیده‌اید...

</h5>
<div>
<ProductsList products={products} mainList={false} />

</div>
      </div>
    </div>
  );
}
