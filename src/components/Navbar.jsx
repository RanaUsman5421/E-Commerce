import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faHeart, faCartPlus, faUser } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  

  return (
    <div>
      <div className='bg-black flex justify-around p-1'>
        <div className='h-full w-[70%] text-center'>
          <p className='text-white inline'>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
          <a href="" className='text-white ml-4 underline '>Shop Now</a>
        </div>
        <div className=''>
          <select name="" id="" className='text-white'>
            <option value="" className='text-black'>English</option>
            <option value="" className='text-black'>Urdu</option>
            <option value="" className='text-black'>Punjabi</option>
            <option value="" className='text-black'>Persian</option>
          </select>
        </div>
      </div>

      <div className='h-auto flex px-[8%] mt-10'>
        <div className='w-[60%] h-auto flex justify-between items-center'>
          <p className='font-bold text-3xl '>Exclusive</p>

          <ul className='w-[50%] flex justify-between items-center'>
            <li><NavLink to="/" className='text-lg'>Home</NavLink></li>
            <li><NavLink to="/contact" className='text-lg'>Contact</NavLink></li>
            <li><NavLink to="/about" className='text-lg'>About</NavLink></li>
            <li><NavLink to="/signup" className='text-lg'>SignUp</NavLink></li>
          </ul>
        </div>

        <div className='w-[40%] h-auto flex justify-end'>
          <div className='h-full bg-gray-100 w-fit p-2 flex items-center rounded-lg'>
            <input type="text" className='h-full p-2 border-none outline-none' placeholder='What are you looking for?'/>
            <FontAwesomeIcon icon={faSearch} className='text-2xl text-black ml-6'/>
          </div>

          <div className='flex gap-5 items-center ml-7'>
            <FontAwesomeIcon icon={faHeart} className='text-3xl'/>
            <FontAwesomeIcon icon={faCartPlus} className='text-3xl'/>
            <FontAwesomeIcon icon={faUser} className='text-3xl'/>
          </div>
        </div>
      </div>   
      <hr className='mt-10 text-gray-300'/>   
    </div>
  )
}

export default Navbar