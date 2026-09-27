import React from 'react'
import { Link } from 'react-router-dom'

export default function Homes() {
  return (
    <div><h2>Welcome to Home page</h2>
        <button><Link to={'/about'}>Go to about</Link></button></div>
  )
}
