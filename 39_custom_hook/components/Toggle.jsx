import React, { useState } from 'react'
//for custom hook we need to retun vlaue or function noit jsx
export default function Toggle() {
    const[value,setValue]=useState(false);
const toggle=()=>{
    setValue(!value);
}

return[value,toggle]
  
}
