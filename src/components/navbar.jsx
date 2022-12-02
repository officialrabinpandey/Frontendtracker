import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex flex-wrap flex-col sm:flex-row bg-slate-800 items-center '>
      <div className='basis-1/2 flex flex-wrap flex-row p-2 items-center'>
        <div className=''>
          <img className='w-8 h-8' src={logo} alt="" srcset="" />
        </div>
        <div className='p-2 font-bold text-white'>
          Finance Tracker
        </div>
      </div>
      <div className='flex flex-col sm:flex-row basis-1/2 text-gray-400 text-center sm:text-start sm:justify-end  w-full sm:px-12'>
       <a className='p-2 hover:text-white ' href="#">Home</a>
       <a className='p-2 hover:text-white' href="#">Home</a>
       <a className='p-2 hover:text-white' href="#">Home</a>
       <a className='p-2 hover:text-white' href="#">Profile</a>
      </div>
    </div>
  )
}

export default Navbar