import { createContext, useState } from "react";

const AuthContext=createContext();
import React from 'react'
const AuthProvider= ({children})=> {
  const [isLogin, setIsLogin] = useState(false);

  const login = () => {
    setIsLogin(true);
  };

  const logout = () => {
    setIsLogin(false);
  };
  
  return (
    <AuthContext.Provider value={{isLogin,login,logout}}>
      {children}
    </AuthContext.Provider>
  )
}
export {AuthContext,AuthProvider}
