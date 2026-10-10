import React, { useEffect, useEffectEvent, useState } from 'react'
import data from "../data";
import { useNavigate, useOutletContext } from 'react-router-dom';
export default function StartQuiz() {
  const[index,setIndex]=useState(0);
  const navigate=useNavigate();
  const [seconds,setSeconds]=useState(5);
  const{userScore,setUserScore}=useOutletContext();

 const onInterval = useEffectEvent(() => {
 
      if(seconds>0){
        setSeconds(seconds-1);
      }else{
        if(index==data.length-1){
            navigate('/completed');
        }else{
          setIndex(index+1);
          setSeconds(5)
        }
       
      }
      

});
  

function setTimer(){
   useEffect(()=>{
              const id= setInterval(()=>{
                onInterval()
             
                },1000);
                 return () => {
                  clearInterval(id)
                };


            },[])
}
setTimer();

 
  function ClickHandler(option){
    if(index==data.length-1){
      setIndex((prev)=>prev+1);
      if(option.correct){
        setUserScore((prev)=>(prev+1));
      }
      navigate('/completed');

    }else{
      if(option.correct){
        setUserScore((prev)=>(prev+1));
      }
      setIndex((prev)=>prev+1);
     
    }
    setSeconds(10)
  }
  return (
    <div className='questionAns'>
      <div className='time'>
         time left:{seconds}
      </div>
      <div className="bar">
        <div className="fill" style={{width:`${parseInt(((index+1)/data.length)*100)}%`,background:"blue",color:"white"}}>
          {parseInt(((index+1)/data.length)*100)}%
        </div>
      </div>
       <div className="quizAns">
     {
        <>
        {/* {data.length>index? (console.log("oh ice") : (console.log("length icrease"))) } */}
          <h2>{data[index].question}</h2>
          <div className="questionOption">
            {data[index].options.map((option)=>{
              return <div key={option.id}  onClick={()=>ClickHandler(option)} className='options'>{option.opt}</div>
            })}
          </div>
       </>
      }
     

    
       
    
          

   
       
      </div>
    </div>
  )
}
