import React, { useState } from 'react'
import Hoc from './Hoc'

function Onclick({data,increment}) {
    
  return (
    <div>
        <h2>Count: {data}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Hoc(Onclick)