import React, { useContext } from 'react'
import { Themecontext } from './ThemeContext'
export default function ThemeButton() {
    const {theme,setTheme}=useContext(Themecontext);
  return(
        <button onClick={()=>{
            setTheme(theme=="white"?"black":"white");
        }} style={{backgroundColor:theme=="white"?"white":"black",
            color:theme=="white"?"black":"white",
        }}>current Theme:{theme}</button>
    )
}
 