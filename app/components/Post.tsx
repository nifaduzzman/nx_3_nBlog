"use client"
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import { FaEye } from "react-icons/fa6";
import { HiMiniBookmark } from "react-icons/hi2";
import Share from './Share';
import { Data } from '../Context';


function Post({ post }: any) {
  const loc = post.title.replace(/\s/g, "-");



  return (
    <div className='flex flex-col p-4'>
      <div className='flex gap-2 items-center'>
        <Link href={`/u/${post.author.replace(/\s/g, "-")}`} className='dark:text-slate-200 hover:underline text-slate-800 text-xl'>
          {post.author}
        </Link>
        <p className='text-slate-500 text-sm'>{post.date}</p>
      </div>
      <Link href={`/blog/${loc}`} className='text-md cursor-pointer py-2 text-slate-700 dark:text-slate-300'>
        {post.title}
      </Link>
      <div className='flex gap-8 text-slate-500 items-center text-base'>
        <p className='flex gap-1 items-center'>
          <FaEye className='text-slate-500' /> {post.views}
        </p>
        <p className='cursor-pointer hover:text-slate-600 active:text-slate-700'>
          <HiMiniBookmark
          //  onClick={handleClick}
           />
        </p>
        {/* Passing loc as a prop */}
        <Share loc={loc} />
      </div>
    </div>
  );
}

export default Post;
