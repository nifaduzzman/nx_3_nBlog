"use client"
import Image from "next/image";
import Posts from "./components/Posts";
import { createContext, useState } from "react";
import Navbar from "./components/Navbar";


export default function Home() {
 
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24 md:w-[80%]  mx-auto dark:bg-slate-800">
        <Posts />
      </main>
    
    </>
  )
}
