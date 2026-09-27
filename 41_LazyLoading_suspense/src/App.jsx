import React, { lazy, Suspense, use, useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Product from './components/Product';
import { Outlet } from 'react-router-dom';
// import Post from './components/Post'
const Post=lazy(()=>import('./components/Post'))

export default function App() {
  const[show,setShow]=useState(false);
  return (
    <div>
        {/* example 1 */}
        {/* <button onClick={()=>(setShow(true))}>show post</button>
        {show && 
        <Suspense fallback={'loading.....'}>
              <Post/>
        </Suspense>
        } */}
        <div>
            <Home />
           <Outlet />
        </div>
    </div>

  )
}
