import React, { use, useEffect, useState } from 'react'

export default function usefetchAPi(url) {
    const[data,setData]=useState();
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);
    const[text,setText]=useState("");
const handleInput=(e)=>{
    setText((e.target.value.toLowerCase()));
}
    useEffect(()=>{
        async function fetchingData() {
        try {
            const resp=await fetch(url);
            const jsondata=await resp.json();
            setData(jsondata);
          
            
        } catch (error) {
            setError(error)
            
        }finally{
            setLoading(!loading)
        }
        
    }
    fetchingData();

    },[url]);
    
    return {data,error,loading,handleInput,text}
  
}
