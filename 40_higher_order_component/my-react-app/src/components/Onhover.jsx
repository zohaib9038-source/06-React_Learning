import React, { useState } from 'react'
import Hoc from './Hoc'

function Onhover({data,increment}) {
   
  return (
    <div>
        <h2>Data: {data}</h2>
        <button onMouseOver={increment}>button hover</button>
    </div>
  )
}

export default Hoc(Onhover)