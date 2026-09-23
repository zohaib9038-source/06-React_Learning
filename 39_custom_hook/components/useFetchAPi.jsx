import React, { use, useEffect, useState } from 'react'

export default function useFetchAPi(apiUrl) {
 const[data,setData]=useState(null);
 const[error,setError]=useState();

 useEffect(()=>{

    async function Fetchdata() {
        try {
            const res=await fetch(apiUrl);
            const jsonData=await res.json();
            setData(jsonData);
            
        } catch (error) {
            setError(error);   
        }finally{

        }
            
        
    }
    Fetchdata();

 },[apiUrl]);

 return [data,error]

}
