"use client"
import React, { useContext } from 'react'

import Post from '../components/Post'
import { Data } from '../Context'

function page() {
  const {data,handleData}:any =  useContext(Data)
  console.log("This is data:", data)
  return (

    <div>
      {
      }
      
    </div>
  )
}

export default page
