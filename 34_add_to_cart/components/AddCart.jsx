import React, { useContext, useState } from "react";
import { CountCartContext } from "./CountCartContext";
export default function AddCart() {
  const{cartArr,setCartArr}=useContext(CountCartContext);
  
  console.log(cartArr)

  let total=cartArr.reduce((sum,current)=>{
   return(sum + current.qty*current.price);
  },0);
  
// handle number of quantity
function HandleQuantity(e,id){
  if(e.target.value>=0){
  setCartArr((prev)=>{
   return prev.map((obj)=>{
      return(
        obj.id==id? {...obj, qty:e.target.value}:obj
      )
    });
  });
  }

}

// Delete Item logic
function RemoveItem(id){
 setCartArr(cartArr.filter((obj)=>(obj.id!=id)));
 console.log(cartArr)


}
  return(
  <div>
    <h1>Shoping cart</h1>
    <h2>Your cart</h2>
  
  {cartArr.length>0 ?(
    <>
    <table
  border={1}
  cellPadding={10}
  style={{
    width: "100%",
    borderCollapse: "collapse",
    textAlign: "center",
    marginTop: "20px",
  }}
>
  <thead style={{ backgroundColor: "#f3f4f6" }}>
    <tr>
      <th style={{ paddingBlock: "12px" }}>Product</th>
      <th style={{ paddingBlock: "12px" }}>Price</th>
      <th style={{ paddingBlock: "12px" }}>Quantity</th>
      <th style={{ paddingBlock: "12px" }}>Subtotal</th>
      <th style={{ paddingBlock: "12px" }}>Action</th>
    </tr>
  </thead>

   <tbody>
{
  cartArr.map((obj)=>{
    return(
<tr key={obj.id}>
    <td style={{paddingBlock:"12px"}}>{obj.p_name}</td>
    <td style={{paddingBlock:"12px"}}>{obj.price}</td>
    <td style={{paddingBlock:"12px"}}><input style={{
  border: "1px solid black",
  width: "67px",
  paddingBlock:"4px",
  textAlign: "center"
}} type="number" value={obj.qty} onChange={(e)=>HandleQuantity(e,obj.id)}/></td>
    <td>{obj.price*obj.qty}</td>
    <td>
    <button style={{color: "red",
      border:"none",
      background: "none",
      border: "1px solid red",
      paddingInline: "0.6rem",
      cursor:"pointer",
      paddingBlock: "0.2rem"}}
      onClick={()=>RemoveItem(obj.id)}
      >Remove
    </button>
    </td>
</tr>

    )
    
  })
  
}

  
  </tbody>
</table>
<h2>Total:{total}</h2>
</>
)
:(<h2 style={{textAlign:"center"}}>cart empty</h2>)}

  </div>);
}