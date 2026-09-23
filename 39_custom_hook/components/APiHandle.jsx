import React from 'react'
import useFetchAPi from './useFetchAPi'


export default function APiHandle() {
    const[data,error]=useFetchAPi("https://jsonplaceholder.typicode.com/todos");
    if(error) return <h2>error occurs</h2>

   return(
    <>
    {data.map((res)=>{
        return <h2 key={res.id}>{res.title}</h2>;
    })
    }
    </>
   
)
    

}
