import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className=' pr-[8%] h-fit'>
      <div className=' h-fit mt-20 flex'>
        <div className='w-[60%] h-fit'>
          <img src={assets.SignUp} alt="" className='w-[100%]' />
        </div>
        <div className='w-fit flex justify-end items-center'>
          <form action="" className='w-[75%] h-fit'>
            <h2 className='font-semibold text-5xl'>Create an account</h2>
            <p className='mt-3 text-lg'>Enter your details below</p>
            <input type="text" placeholder='Name' className='outline-none w-[100%] py-2 border-b border-gray-400 mt-6' />
            <input type="text" placeholder='Email or phone number' className='outline-none w-[100%] py-2 border-b border-gray-400 mt-6' />
            <input type="text" placeholder='Password' className='outline-none w-[100%] py-2 border-b border-gray-400 mt-6' />
            <button className='bg-[#DB4444] text-white text-lg w-[100%] py-2 mt-8 rounded-sm'>Create Account</button>

            <button className='flex justify-center w-[100%] mt-4 gap-3 border border-gray-300 py-2 rounded-sm'><img src={assets.google} alt=""/>SignUp with Google</button>
            
            <div className='mt-6 flex justify-center gap-2 text-gray-500'>
              <p className='text-center inline'>Already have account?</p>
              <Link to='/login' className='border-b border-gray-400 pb-2 text-gray-700'>Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup