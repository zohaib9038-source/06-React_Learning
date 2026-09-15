
import React, { useState } from 'react'
import ThemeButton from './components/ThemeButton'
import { Themecontext } from './components/ThemeContext'
import Toolbar from './components/Toolbar'
import { AuthProvider, authProvider } from './Auth_example/AuthContext'
import Navbar from './Auth_example/Navbar'
export default function App() {
    // comment is an exmaple of theme
// const[theme,setTheme]=useState('white')
    
  return (
    // <Themecontext.Provider value={{theme,setTheme}}>
    //     <Toolbar/>
    // </Themecontext.Provider>

    <AuthProvider>
        <Navbar/>
    </AuthProvider>
    

    

  )
}
