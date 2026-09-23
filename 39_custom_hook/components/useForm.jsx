import React, { useState } from 'react'

export default function useForm(initialvlaue={},callback) {
    const[values,setValue]=useState(initialvlaue);

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setValue((prev)=>({...prev,[name]:value}));

  }

  const Handlesubmit=(e)=>{
    e.preventDefault();
    if(callback)return callback(values);
  }

  const reset=()=>{
    setValue(initialvlaue);
  }
  return {values,reset,Handlesubmit,handleChange}
}
