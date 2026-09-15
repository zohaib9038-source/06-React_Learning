import React, { useContext, useState } from 'react'
import { AuthContext } from './AuthContext'
export default function Navbar() {
   const {isLogin,login,logout}=useContext(AuthContext);
  return (

        <nav>
            {
                isLogin?(<button onClick={logout}>logout</button>):(<button  onClick={login}>login</button>)
            }
        </nav>
   
    
  )
}
