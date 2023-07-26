import React from 'react';
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Footer() {
  return (
    <div className='flex justify-center bg-gray-900 mt-10 sticky bottom-0'>
      <AiOutlineCopyrightCircle className='text-[25px]'/>
      <h3 className='ml-3'>Copyright of Blabber Blog Owner</h3>
    </div>
  )
}

export default Footer
