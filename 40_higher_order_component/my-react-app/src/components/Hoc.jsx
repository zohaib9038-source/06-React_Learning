import React from 'react'
import { useState } from 'react';

function Hoc(OldComponent) {
    const NewComponent=()=>{
    const[data,setData]=useState(0);
    const increment=()=>{
        setData(data+1);
    }
    return <OldComponent data={data} increment={increment}/>
}

return NewComponent
  
}

export default Hoc