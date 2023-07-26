import React from 'react';
import { RxAvatar } from "react-icons/rx";


function MainPost({post}) {


  return (
    <div className='grid md:grid-cols-2 grid-cols-1 mt-10 px-10 md:px-15 lg:px-32 gap-8'>
      <img src={post.coverImage} className='rounded-2xl object-cover w-full h-full'/>
      <div>
        {/* <h4 className='text-blue-900'>{post.user}</h4> */}
        <h2 className='text-[23px] font-bold mt-5'>{post.title}</h2>
        <p className='line-clamp-1 text-blue-200 mt-5'>{post.body}</p>
        <div className='mt-5 flex items-center'>
          <RxAvatar className='text-[50px]'/>
          <div className='ml-5'>
            <h3>{post.userName}</h3>
          </div>
        </div>
      </div>
      {/* {post.title} */}
    </div>
  )
}

export default MainPost
