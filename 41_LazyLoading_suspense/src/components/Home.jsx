import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
    <ul style={{display:"flex",gap:"2rem",cursor:"pointer"}}>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        <li><Link to={'/user/10'}>User</Link></li>
        <li><Link to={'/product'}>Product</Link></li>
    </ul>
    
        </div>
  )
}
