import React from 'react'
import ProductDetails from './ProductDetails'
import './../../../css/singleProduct/singleProduct.css'
import  Breadcrumbs from './BreadCrumbs'
export default function SingleProduct() {
  return (
    <div className='p-3 w-100 min-vh-100'>
        <Breadcrumbs/>
        <ProductDetails/>
    </div>
  )
}
