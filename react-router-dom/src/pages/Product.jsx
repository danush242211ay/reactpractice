import React from 'react'
import { Link,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-between gap-10 py-4'>
        <Link to='/product/men'>Men</Link>
        <Link to='/product/women'>Women</Link>
      </div>
    <Outlet/>
    </div>
  )
}

export default Product