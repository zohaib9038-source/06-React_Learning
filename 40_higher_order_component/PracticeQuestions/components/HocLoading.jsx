import React, { useState } from 'react'

export default function HocLoading(InputComp) {


    return function NewComponent(){
    
        const[loading,setLoading]=useState(true);
        function Trigger(){
            setLoading(!loading)
        }
       
             <button onClick={Trigger}>user</button>

        // loading? ("loading..."): (<InputComp/>)

    }
   

  
}
