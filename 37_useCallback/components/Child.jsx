import React from 'react'

 function Child({click}) {
    console.log("child rendering...")
  return (
    <button onClick={click}>Child button</button>
  )
}

// export default React.memo(Child);//re render ni hoga bar bar
export default Child;//ab yahan per bar bar component render hoga and you can see it on the console