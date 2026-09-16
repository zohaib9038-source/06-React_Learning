import React from 'react'

 function Child({obj}) {
  console.log("child rendering...")
  console.log(obj)
  return (
    <div>userName:{obj.name}</div>
  )
}
export default React.memo(Child);
