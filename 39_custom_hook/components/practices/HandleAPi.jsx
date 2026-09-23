import React from 'react'
import usefetchAPi from './usefetchAPi'

export default function HandleAPi() {
    const {data,error,loading,handleInput,text}=usefetchAPi("https://jsonplaceholder.typicode.com/users");
    if(error){
       return <h2>{error}</h2>
    }
    if(loading){
        return<h2>{loading}</h2>
    }
    function onsubmit(e){
        e.preventDefault();
        console.log(text)
    }
    return(
        <>
        <form onSubmit={onsubmit}>
            <input type="text" name='text' value={text} onChange={handleInput} placeholder='text' />
        </form>
        {
            text=="" ? (data.map((res)=>{
            return <h2 key={res.id}>{res.name}</h2>
             })):(data.filter((res)=>(res.username.toLowerCase()==text)).map((filterResult)=>(<h2 key={filterResult.id}>{filterResult.name}</h2>)))
        }
        
        </>
        
        
        
    )
   
    
  
}
