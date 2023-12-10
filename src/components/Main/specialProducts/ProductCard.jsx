import React from 'react'
import '../../../css/main/specialProducts.css'
export default function ProductCard({product}) {
  return (
    <div className='product-card'>
<img src={product.img} alt="" className='product-image'/>
    </div>
  )
}
