import React, { useState } from 'react'

export default function useFormData(initialData={}) {
    const[data,setData]=useState(initialData);

    const HandleChange=(e)=>{
        const{name,value}=e.target;
        setData((prev)=>({
            ...prev,[name]:value
        }));

    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        if(data.email && data.password && data.cpassword){
            if(data.password===data.cpassword){
                 console.log("data submitted succesfully....",data)
            }else{
                console.log("password not macthed")
            }

        }else{
            console.log("empty data not allowed")
        }
    }

    const ResetForm=()=>{
        setData(initialData);
    }
    return{data,ResetForm,HandleChange,HandleSubmit}
  
}
