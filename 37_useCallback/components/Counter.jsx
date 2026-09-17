import React, { useCallback, useState } from 'react'

export default function Counter() {
    const[count,setCount]=useState(0);
    const Increment=useCallback(()=>{
        console.log("counting.....")
        setCount((prev)=>(prev+1));
    },[]);
  return (
    <div>
 <h2>count:{count}</h2>
    <button onClick={Increment}>increment</button>
    </div>
   
  )
}
