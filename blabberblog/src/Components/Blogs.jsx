import React from 'react';
import { RxAvatar } from "react-icons/rx";

function Blogs({posts}) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 px-10 md:px-15 lg:px-32'>
      {posts.map((post, index)=>( 
        index>1 && 
         <div className='m-4 cursor-pointer' key={post.id}>
         <img src={post.image} className='rounded-2xl w-full h-[200px] object-cover '/>
         {/* <div> */}
           {/* <h4 className='text-blue-900'>{post.user}</h4> */}
           <h3 className='font-bold mt-3'>{post.title}</h3>
           <p className='line-clamp-1 text-blue-200 mt-3'>{post.body}</p>
           <div className='flex mt-3'>
             <RxAvatar className='text-[35px]'/>
             <div className='ml-2'>
               <h3 className='font-[10px]'>{post.userName}</h3>
             </div>
           {/* </div> */}
         </div>
         {/* {post.title} */}
       </div>
      ))}
    </div>
  )
}

export default Blogs
