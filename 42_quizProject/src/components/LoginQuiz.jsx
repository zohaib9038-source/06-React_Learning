import React, { useContext, useEffect, useState } from 'react'
import StartQuiz from './StartQuiz'
import {userContext} from "./UserContext"
import { Navigate, useNavigate } from 'react-router-dom';
import {useOutletContext} from "react-router-dom";
export default function LoginQuiz() {
const { name, setName,setUserScore } = useOutletContext();
useEffect(()=>{
  setUserScore(0);

},[]);
    const[start,setStart]=useState(false)
    const navigate = useNavigate();
   function StartYourQuiz(){
    if(name==""){
        alert("First Enter your name...");
        
    }else{
       setStart(true)
        navigate('/quiz');
    }
    

   }
  return (
    <div className="Quiz">
 <div className='startQuiz'>
        <h1 className=""> React Quiz Challenge</h1>
      <input type="text" onChange={(e)=>{
        setName(e.target.value);
      }} placeholder='Enter your name...'  value={name}/>
      <button onClick={StartYourQuiz}>Start Quiz</button>
    </div>
    </div>
   
  )
}


