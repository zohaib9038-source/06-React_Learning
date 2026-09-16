import React, { useMemo, useState } from 'react'
import Child from './Child';

export default function Parent() {
    const[count,setCount]=useState(0);
    const[text,setText]=useState("");
    console.log("running parent ....")
    function parentObj(){
        const user={
          name:"zoaib",
          age:22
        }
        return user;
    }

   /*
When the parent component re-renders, the child component
also re-renders, even though its props have not changed.

To prevent unnecessary child re-renders, we use React.memo().
and it is used in child componets
*/
    const result=useMemo(()=>{
       return parentObj();
    },[]);
    
  return (
    <>
     <div>WithUseMemo</div>
    
     <h3>{count}</h3>
   <button onClick={()=>{
    setCount(count+1);
   }}>count</button>
   <input type="text" value={text} onChange={(e)=>{
    setText(e.target.value);

   }} />
   
   <Child obj={result}/>
    </>
   
  )
}
