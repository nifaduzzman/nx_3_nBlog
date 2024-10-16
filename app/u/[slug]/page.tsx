import Post from '@/app/components/Post'
import { posts } from '@/data'
import React from 'react'


function page({params}:any) {
  const user = posts.filter((post)=>post.author.replace(/\s/g, "-") === params.slug)
  console.log(user)
  return (


    <div className='w-[80%] min-h-96 mx-auto  py-12  px-10 flex flex-col gap-12'>
      <div className='w-full  flex justify-center'>
        <h1 className='text-6xl text-slate-900 dark:text-slate-100'>{user[0].author}</h1>
      </div>
      <div>
        <p>{user[0].author}</p>
        <p>{user[0].userName}</p>
        <p>post : {user.length}</p>
      </div>

      <h1 className='text-3xl border-t-2 pt-8'>Posts</h1>
      
      <div>
        {
          user.map((post:any) => (
            <div>
              <Post post={post}/>
            </div>
          ))
        }

      </div>
      
      
    </div>
  )
}

export default page
