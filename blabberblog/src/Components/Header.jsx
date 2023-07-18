import React from 'react';
import logo from '../assets/Images/Logo.png';

function Header() {
  return (
    <div className='flex justify-between items-center'>
      <img src={logo} className='w-[100px] cursor-pointer rounded-2xl'/>
      <ul className='flex gap-4 md:gap-14'>
        <li className='hover:font-bold cursor-pointer'>Home</li>
        <li className='hover:font-bold cursor-pointer'>About Us</li>
        <li className='hover:font-bold cursor-pointer'>Contact Us</li>
      </ul>
      <button className='bg-blue-900 rounded-full'>Sign In</button>
    </div>
  )
}

export default Header
