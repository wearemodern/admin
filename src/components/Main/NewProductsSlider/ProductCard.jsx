import React from 'react'
import '../../../../css/main/newProductsSlider/newProducts.css'
export default function ProductCard({product}) {
  return (
    <div className='single-product-card d-flex justify-content-center align-items-center m-1'>
<img src={product.image} alt="" className='text-center single-product-card-img'/>
    </div>
  )
}
