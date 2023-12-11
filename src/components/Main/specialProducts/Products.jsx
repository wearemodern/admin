import React from 'react'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
export default function Products({products,text}) {
  const navigate=useNavigate()
  return (
   <>
   <div className=' d-flex justify-content-between my-2 align-items-center'>
<b>

 {text}
</b>

{<button  onClick={()=>navigate('/')} className='orange-btn'>
  مشاهده بیشتر 
  <i className="bi bi-arrow-left text-white mr-1"></i>
</button>}
   </div>
    <div className='d-flex justify-content-center align-items-center  w-100 flex-wrap' style={{height:'80%'}}>
       {products.map((product,index)=>{
        return(  <div className='col-6 px-0 text-center d-flex justify-content-center py-2' key={index}>
        <ProductCard product={product}/>
 
             </div>)
          
        })}
    
    </div>
   </>
  )
}
