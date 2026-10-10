import React, { useState } from 'react'
import ".././app.css";
import { useNavigate, useOutletContext } from 'react-router-dom';
import quizlength from "../data"
export default function DashBoard() {
const{name,userScore}=useOutletContext();
const [userPerformance,setUserPerformance]=useState(JSON.parse(localStorage.getItem("userScore")));  
function clearStorage(){
  localStorage.removeItem("userScore");
  setUserPerformance(null);
 
}
return (
  <div className='table'>
    <h2>LeaderBoard</h2>
   <table style={{width:"100%", borderCollapse:"collapse",paddingInline: "30px"}}>
        <thead>
            <tr style={{background:"black",color:"white"}}>
            <th>#</th>
            <th>Name</th>
            <th>Score</th>
            <th>Percentage</th>
            <th>Date</th>
            </tr>
        </thead>
        <tbody>
          {userPerformance && (userPerformance.map((data,index)=>{
              return(
                <>
                {data.name!="" ?(   <tr key={index}>
                <td>{index+1}</td>
                <td>{data.name}</td>
                <td>{data.score}</td>
                <td>{((data.score/quizlength.length)).toFixed(1)*100}%</td>
                <td>{data.datetime} , {data.date}</td>
               </tr>):('')}           
                </>
              )


            }))
           
          }
           
          
        </tbody>
</table>
      <button className='clearLeaderBoard' onClick={clearStorage}>Clear LeaderBoard</button>
  </div>
 
  
  )
}
