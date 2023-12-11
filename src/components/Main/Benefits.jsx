import React from 'react'
import { Divider } from '@mui/material';
export default function Benefits() {
  return (
   <div className='d-flex justify-content-between w-100 h-100'>
     <img src="./benefit.jpg" alt="" style={{width:"200px",height:"200px"}} />
    <div>
        <Divider textPosition="start" orientation="vertical" style={{height:'100px'}} variant="fullWidth">Vertical Text</Divider>
    </div>
   </div>
  )
}
