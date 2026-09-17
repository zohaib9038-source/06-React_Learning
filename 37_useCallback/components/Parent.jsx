import React, { useCallback, useState } from 'react'
import Child from './Child';

export default function Parent() {
    const[count,setCount]=useState(0);
    const Handle=useCallback(()=>{
        console.log("button clicked.....")
      
    },[]);
  return (
    <div>
 <h2>count:{count}</h2>
    <button onClick={()=>{
        setCount(count+1)
    }}>parent Button</button>
    <Child click={Handle}/>
    </div>
   
  )
}
