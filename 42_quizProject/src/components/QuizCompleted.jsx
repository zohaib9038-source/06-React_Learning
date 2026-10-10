import React, { useEffect, useEffectEvent, useState } from 'react'
import { Link, useOutletContext } from 'react-router-dom'
export default function QuizCompleted() {
    const{name,userScore,userData,setUserData}=useOutletContext();
    const date = new Date();
    const monthYeardate = date.toLocaleDateString();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const time=hours+":"+minutes+":"+seconds;
    const newobj={
            name:name,
            score:userScore,
            datetime:time,
            date:monthYeardate
    }

useEffect(()=>{
 setUserData((prev) => {
  console.log("PREVIOUS DATA:", prev);
  console.log("NEW OBJECT:", newobj);
  return [...prev, newobj];
});

},[]);

useEffect(()=>{
 localStorage.setItem("userScore",JSON.stringify(userData));

},[userData]);

  return (
    <div className='quizAns'>
        <div className='quizCompleted'>
            <h2>Quiz Completed</h2> 
            <p> {name} Your Score is: </p>
            <p>{userScore}</p>
        </div>
   <div className="dashboard">
      <button className='LeaderBoard'> <Link to={"/dashboard"}> View LeaderBoard</Link></button>
        <button className='home'><Link to={"/"}>Home</Link></button>
   </div>

   
    </div>
  )
}
