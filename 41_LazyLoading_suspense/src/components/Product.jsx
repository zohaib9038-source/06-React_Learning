import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <h2>product page</h2>
      
            <Link to={'/product/phone'}>phone</Link> |
             <Link to={'/product/laptop'}>laptop</Link>

            <Outlet/>
       
    </div>
  )
}
