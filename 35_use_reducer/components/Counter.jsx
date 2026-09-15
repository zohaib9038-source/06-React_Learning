import React, { act, useReducer } from 'react'

export default function Counter() {
    let counter={count:0};
  
    function reducer(state,action){
        switch(action.type){
            case "increment":
              return {count:state.count+1}
            case "decrement":
              return {count:state.count-1}
            default:
           return {count:0}
                    



        }

    }
    const[state,dispatch]=useReducer(reducer,counter);

  return (
   <>
   <h2>{state.count}</h2>
   <button onClick={()=>{
    dispatch({type:"increment"});
   }}>+</button>
   <button onClick={()=>{
    dispatch({type:"decrement"});
   }}>-</button>
    <button onClick={()=>{
    dispatch({type:"reset"});
   }}>Reset</button>
   </>
  )
}
