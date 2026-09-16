import React, { useMemo, useState } from 'react'

export default function WIthUseMemo() {
    const[count,setCount]=useState(0);
    const[text,setText]=useState("");
    console.log("running expensive calcualtion....")
    function calculateTotal(){
        let total=0;
        for(let i=0; i<1000990000; i++){
            total+=i;
        }
        return total;
    }
    const result=useMemo(()=>{
       return calculateTotal()
    },[count]);
  return (
    <>
     <div>WithUseMemo</div>
     <h2>result:{result}</h2>
     <h3>{count}</h3>
   <button onClick={()=>{
    setCount(count+1);
   }}>count</button>
   <input type="text" value={text} onChange={(e)=>{
    setText(e.target.value);

   }} />
    </>
   
  )
}
