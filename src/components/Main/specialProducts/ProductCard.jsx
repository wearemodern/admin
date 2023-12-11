import React from 'react'
import '../../../../css/main/specialProducts.css'
import Chip from '@mui/material/Chip';
export default function ProductCard({product}) {
  return (
    <div className='product-card flex-column'>
      <div className='text-right w-100 pb-1 ' style={{height:'15%'}}>
    {product.discount &&  <Chip label={product.discount} color='error' className='text-right h-100'/>}
      </div>
<img src={product.img} alt="" className='product-image'/>
     
    </div>
  )
}
