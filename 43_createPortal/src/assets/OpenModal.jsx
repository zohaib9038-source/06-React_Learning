import React, { useState } from 'react'
import { createPortal } from 'react-dom';

export default function OpenModal() {
    const[isOpened,setIsOpened]=useState(false);
    function close(e){
        e.stopPropagation();
        setIsOpened(false);
    }
  return (
    <div>
      <button className='border mt-4 mx-4 px-2 py-0.5 bg-[#d7d7d9] rounder-[6px]' onClick={()=>setIsOpened(true)}>Open modal</button>
        {
            createPortal(
                isOpened &&(
            <div className='bg-[rgba(0,0,0,0.5)] fixed inset-0 flex justify-center items-center'  onClick={close}>
            <div className='bg-[#e3d9d9]  
  rounded-[11px]  py-4 px-8 flex flex-col gap:1rem bg-white' onClick={(e)=>e.stopPropagation()}>
            <h2>Hello from modal </h2>
            <p>This is a simpel model withput context</p>
            <button className='w-fit mt-4 px-4 rounded-[5px] border  py-0.5 bg-[#d7d7d9] rounder-[6px]  cursor-pointer rounder-[6px]' onClick={()=>setIsOpened(false)}>Close</button>
        </div>
      </div>),
      document.querySelector("#modal")
                
            )
        }
     
    </div>
  )
}
