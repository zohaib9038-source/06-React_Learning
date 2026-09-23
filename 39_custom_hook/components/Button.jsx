import React from 'react'
import Toggle from './Toggle'

export default function Button() {
    const[value,toggle]=Toggle();
    const[test,settoggle]=Toggle();
  return (
    <div>
    <div>
        <button onClick={toggle}>toggle</button>
        {value && "this is visible"}
        
    </div>
    <div>
        <button onClick={settoggle}>toggle</button>
        {test && "this is another visible"}
        
    </div>

    </div>
    
  )
}
