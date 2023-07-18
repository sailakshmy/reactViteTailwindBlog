import React, { useState } from 'react';
import banner from '../assets/Images/Banner.jpg';
import { IoSearchOutline } from "react-icons/io5";


function Search() {
  const tags = [
    {
      id:1,
      name:'All'
    },
    {
      id:2,
      name:'React'
    },
    {
      id:3,
      name:'JS'
    },
    {
      id:4,
      name:'Vue'
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className='flex flex-col justify-center mt-8 px-[100px] md:px-[200px]'>
      <img src={banner} className='rounded-2xl'/>
      <div className='bg-[#3b3b3b] rounded-lg p-3 mt-[-30px] mx-[25%] flex items-center'>
        <IoSearchOutline className='text-[20px] text-gray-400'/>
        <input type='text' placeholder='Search' className='outline-none ml-2'/>
      </div>
      <div className='flex gap-10 justify-center mt-5'>
          {tags.map((tag,index)=>(
            <ul onClick={()=>setActiveIndex(index)}
                key={tag.id}
                className={`${index === activeIndex?'bg-blue-900':null}
                  p-2 pb-3 rounded-sm md:rounded-full cursor-pointer md:px-4
                  hover:scale-110 hover:border-[1px] border-blue-900
                  transition-all duration-100 ease-in-out`
                }
            >
              <li>{tag.name}</li>
            </ul>
          ))}     
      </div>
    </div>
  )
}

export default Search
