"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Ob = {name: string, href: string, icon: any}

function Navlinks({navLinks}: {navLinks: Ob[]}) {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <ul className='flex gap-4 md:gap-44'>
        {
          navLinks.map((link) => (
            <li key={link.name} className={`text-2xl hover:text-orange-500 cursor-pointer transition-colors duration-100 px-12 py-2 ${pathName === link.href ? "text-orange-500" : "text-slate-900 dark:text-slate-100"}`}>
              <Link href={link.href}>{link.icon}</Link>
            </li>))
        }
      </ul>
  )
}

export default Navlinks
