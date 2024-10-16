import React from 'react'
import {posts} from '@/data'
import Link from 'next/link'


function page({params}:any) {
  const post:any = posts.find((post:any) => post.title.replace(/\s/g,"-") === params.slug)
  return (
    <div className='text-black flex-col flex items-center py-12 gap-20 w-[80%] min-h-96 mx-auto'>
      <h1 className='text-3xl font-semibold dark:text-slate-100 text-slate-800'>{post.title}</h1>
      <div className='w-full text-2xl dark:text-slate-200 text-slate-800 md:px-40'>
        <Link href={`/u/${post.author.replace(/\s/g, "-")}`} className='hover:underline'>{post.author} </Link>
        <p className='text-lg text-slate-500'>{post.date}</p>
      </div>
      <p className='text-xl dark:text-slate-300 text-slate-700 md:px-40'>{post.content}</p>

    </div>
  )
}

export default page
