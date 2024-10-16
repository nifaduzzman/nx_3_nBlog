import { posts } from '@/data'
import Link from 'next/link'
import React from 'react'

function page() {
  const users = posts.filter((post,index,self)=>{

    return index === self.findIndex((p)=> p.author === post.author) && post.author 
  })
  console.log(users)
  return (
    <div className='w-[80%] min-h-96 mx-auto  py-12  px-10 flex flex-col gap-12 dark:text-slate-100 text-slate-900'> 
      <h1 className='text-3xl pb-8 '>Users({users.length})</h1>
      <div className='flex flex-col divide-y divide-slate-500/35'>

      {
        users.map((user) => (
          <div>

            <div key={user.author} className='py-2 px-2'>
              <Link href={`/u/${user.author.replace(/\s/g, "-")}`} className='text-xl hover:underline font-bold'>{user.author}</Link>
              <div className='flex gap-8 text-slate-500 items-center'>
                <p className='text-slate-500'>{user.userName}</p>
                <p>posts: {posts.filter(post=>post.author === user.author).length}</p>
              </div>
            </div>
          </div>
        ))
      }
      </div>


      
    </div>
  )
}

export default page
