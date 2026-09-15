import React, { useReducer } from 'react'
function HandleChange(e){
    dispatch({
            name:e.target.name,
            value:e.target.value
        });
}
function reducer(state,action){
    return {...state,[action.name]:action.value}

}
export default function FormData() {
    const[formData,dispatch]=useReducer(reducer,{
        name:"",
        email:""

    });
  return (
    <form action="">
        <input type="text" name='name' value={formData.name} onChange={HandleChange}/>
        <input type="email" name='email' value={form.email} onChange={}/>
    </form>
  )
}
