import {posts} from '@/data'
import React from 'react'
import Post from './Post'

function Posts() {
  
  return (
      <div className='w-full  divide-y divide-slate-500/35'>
        {posts.map((post:any) => (
          <Post post={post} key={post.title}/>
        ))}
      nifad
      </div>
  )
}

export default Posts
