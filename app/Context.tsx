"use client"
import React, { ReactNode, useState } from 'react'
import { createContext } from 'vm'

export const Data = createContext()
function Context({children}:{children:ReactNode}) {
  const [data,setData] = useState<any[]>([])
  console.log(data)
  return (

    <div>
      <Data.Provider value={{data,setData}}>
        {children}
      </Data.Provider>
    </div>
  
)
}

export default Context
