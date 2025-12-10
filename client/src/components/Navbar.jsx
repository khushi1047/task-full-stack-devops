import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-between items-center sm:items-center p-6 m-5 bg-black lg:gap-50'>
      <p className='font-bold text-2xl text-white mb-4 sm:mb-0'>Taskify</p>
 
      <ul className='flex flex-col sm:flex-row gap-4 sm:gap-10 text-gray-400'>
        <li><Link to ='/' className='hover:text-white transition'>Home</Link></li>
        <li><Link to ='/features' className='hover:text-white transition'>Features</Link></li>
        <li><Link to ='/about' className='hover:text-white transition'>About</Link></li>
        <li><Link to ='/contact' className='hover:text-white transition'>Contact</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
