"use client"
import React from 'react'
import { RiShareForward2Fill } from "react-icons/ri";
interface ShareProps {
  loc: string; // Expecting 'loc' as a string prop
}

function Share({loc}: ShareProps) {
  const handleShare = async ( ) => {
    console.log("Copied")
    try{

    
    await navigator.clipboard.writeText("http://localhost:3000/blog/" + loc)
    setTimeout(() => {
      console.log("Not copied")
    },2000)
  }catch(error){
    console.log(error)
  }
  }
  return (
    <p className='cursor-pointer hover:text-slate-600 active:text-slate-700' onClick={handleShare}><RiShareForward2Fill/></p>
      
  )
}
// Define props type for the Share component


export default Share;
