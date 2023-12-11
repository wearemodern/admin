import React from 'react'
import '../../../../css/main/specialProducts.css'
import Products from './products'
import NewProduct from './NewProduct'

export default function SpecialProducts() {
  const discountedProducts=[
    {img:'./3.jpg',discount:'20%'},
    {img:'./2.jpg',discount:'12%'},
    {img:'./art.jpg',discount:'36%'},
    {img:'./technology.jpg',discount:'18%'},
]
  const products=[
    {img:'./3.jpg'},
    {img:'./2.jpg'},
    {img:'./art.jpg',},
    {img:'./technology.jpg'},
]
const newProduct={img:'./abzar.jpg'}
  return (
    <div className='specialProducts-container d-flex flex-column flex-md-row'>
<div className="col-12 col-md-4">
  <Products products={discountedProducts} text={'تخفیف‌های ویژه'}/>
</div>
<div className="col-12 col-md-4">
  <NewProduct product={newProduct}/>
</div>
<div className="col-12 col-md-4">
<Products products={products} text={'محصولات پربازدید'}/>
</div>
    </div>
  )
}
