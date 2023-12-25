import React from 'react'
import DesktopCategories from './DesktopCategories'
import MobileCategories from './MobileCategories'
export default function AllCategories() {
  return (
    <>
<div className="d-none d-sm-block">
  <DesktopCategories/>
</div>
<div className='d-block d-sm-none'>
<MobileCategories/>
</div>
    </>
  )
}
