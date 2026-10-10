import { use, useEffect, useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import LoginQuiz from './components/LoginQuiz'
import { userContext } from "../src/components/UserContext";
import StartQuiz from './components/StartQuiz'
import { Outlet } from 'react-router-dom'

function App() {
  const[name,setName]=useState("");
  const[userScore,setUserScore]=useState(0);
   const[userData,setUserData]=useState(localStorage.getItem("userScore")?JSON.parse(localStorage.getItem("userScore")):[]);
 
return (
  <div>
      <Outlet context={{name,setName,userData,setUserData,userScore,setUserScore}}/>
  </div>

  
  )

  
}

export default App
