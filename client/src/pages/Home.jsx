import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black px-4 ">
  <Navbar />
  <div className='text-white border-gray-200 rounded-3xl border-2 w-full sm:w-1/2 md:w-1/3 p-6 mt-10 text-center'>
    ✨ Manage Tasks Effortlessly 
  </div>
  <p className='text-white text-2xl sm:text-3xl md:text-4xl mt-6 text-center'>
    Simplify Your Workflow with Taskify
  </p>
</div>

  )
}

export default Home
