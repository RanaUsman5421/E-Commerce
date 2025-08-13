import React from 'react'
import {assets} from '../assets/assets';
import '../App.css';

const CategoryMain = () => {
  return (
    <div className='px-[8%] mt-20'>
        <div className='h-100 bg-black flex'>
          <div className='w-[50%] p-15 h-[100%]'>
            <p className='text-[#00ff66] font-semibold tracking-wider text-xl'>Categories</p>
            <p className='text-5xl text-white mt-6'>Enhance Your Music Experience</p>
            
            <div className='mt-6 flex gap-6'>

              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>05</p>
                <p className='text-sm'>Days</p>
              </div>


              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>12</p>
                <p className='text-sm'>Hours</p>
              </div>


              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>34</p>
                <p className='text-sm'>Minutes</p>
              </div>


              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>59</p>
                <p className='text-sm'>Seconds</p>
              </div>
            </div>

            <div className='mt-6'>
              <button className='bg-[#00ff66] text-white py-2 px-4 rounded'>Buy Now</button>
            </div>
          </div>

          <div className='w-[50%] h-[100%] flex justify-center items-center relative'>
            <div className='absolute boxshadow'></div>
            <img src={assets.JblSpeaker } alt="" className='w-[7 0%] h-[70%] object-contain' />
          </div>
        </div>
    </div>
  )
}

export default CategoryMain