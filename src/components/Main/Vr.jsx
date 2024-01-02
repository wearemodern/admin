import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import '../../../css/main/vr.css'
import UserIP from './UserIp';
export default function Vr() {
  return (
    <div className='vr-section mt-2'>
        <b >
از فروشگاه مجازی ما دیدن کنید
<StorefrontIcon className='fs-large'/>

        </b>
<button className='bg-secondary border-0 text-white p-2 mt-2' style={{outline:'none',borderRadius:'12px'}}>
  شروع خرید
</button>
<UserIP/>
    </div>
  )
}
