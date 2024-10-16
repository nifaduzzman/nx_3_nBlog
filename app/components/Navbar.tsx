import Link from 'next/link'
import React from 'react'
import ThemeToogle from './ThemeToogle'
import { GoHomeFill } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { IoBookmarks } from "react-icons/io5";
import Navlinks from './Navlinks';

type Ob = {
  name: string
  href: string
  icon: any 
}
function Navbar() {
  const navLinks:Ob[] = [
    {
      name: "Home",
      href: "/",
      icon: <GoHomeFill/>
    },{
      name: "People",
      href: "/people",
      icon: <FaUserFriends/>
    },
    {
      name:"Saved",
      href: "/saved",
      icon: <IoBookmarks/>
    }
  ]
  return (
    <nav className='flex w-full px-6 md:px-20 py-4 bg-slate-100/80 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100 justify-between items-center sticky top-0 backdrop-blur-sm border-b border-slate-500/50' >
      <Link href='/' className='text-4xl font-bold text-orange-400 hover:text-orange-500 cursor-pointer transition-colors duration-100'>nBlog</Link>
      <Navlinks navLinks={navLinks}/>
      <ThemeToogle/>
      
    </nav>
  )
}

export default Navbar
