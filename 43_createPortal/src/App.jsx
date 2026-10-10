import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { createPortal } from 'react-dom'
import './App.css'
import React from 'react'
import OpenModal from './assets/OpenModal'
 function App() {
  return (

    /* Exmaple 1
     <div>
    //   <h1>component</h1>
    //  { createPortal( 
    //       <h2>createPortal</h2>,
    //       document.querySelector("body")
    //   )
    // }
    
     </div>
     */
    //  Example 2
    <OpenModal />

  )
}


export default App
