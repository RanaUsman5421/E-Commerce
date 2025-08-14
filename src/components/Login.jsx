import React from 'react'
import { assets } from '../assets/assets'

const Login = () => {
  return (
    <div className=' pr-[8%] h-fit'>
          <div className=' h-fit mt-20 flex'>
            <div className='w-[60%] h-fit'>
              <img src={assets.SignUp} alt="" className='w-[100%]' />
            </div>
            <div className='w-[40%] flex justify-end items-center'>
              <form action="" className='w-[75%] h-fit'>
                <h2 className='font-semibold text-3xl'>Login to Exclusive</h2>
                <p className='mt-3 text-md'>Enter your details below</p>
                <input type="text" placeholder='Email or phone number' className='outline-none w-[100%] py-2 border-b border-gray-400 mt-6' />
                <input type="text" placeholder='Password' className='outline-none w-[100%] py-2 border-b border-gray-400 mt-6' />
                <div className='flex justify-between items-end'>
                <button className='bg-[#DB4444] text-white text-md px-7 py-1.5 mt-8 rounded-sm'>Login</button>
                <a href="" className='text-[#DB4444] text-sm font-semibold'>Forgot Password?</a>
                </div>
    
                
              </form>
            </div>
          </div>
        </div>
  )
}

export default Login