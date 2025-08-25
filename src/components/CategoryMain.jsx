import React, {useState, useEffect} from 'react'
import {assets} from '../assets/assets';
import '../App.css';

const CategoryMain = () => {

    const targetDate = new Date('2025-08-30T00:00:00').getTime();
      const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());
  
      useEffect(() => {
          const timer = setInterval(() => {
              const distance = targetDate - Date.now();
              setTimeLeft(distance);
              if (distance < 0) clearInterval(timer);
          }, 1000);
          return () => clearInterval(timer);
      }, [targetDate]);
  
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);


  return (
    <div className='px-[8%] mt-20'>
        <div className='h-100 bg-black flex'>
          <div className='w-[50%] p-15 h-[100%]'>
            <p className='text-[#00ff66] font-semibold tracking-wider text-xl'>Categories</p>
            <p className='text-5xl text-white mt-6'>Enhance Your Music Experience</p>
            
            <div className='mt-6 flex gap-6'>

              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>{days}</p>
                <p className='text-sm'>Days</p>
              </div>


              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>{hours}</p>
                <p className='text-sm'>Hours</p>
              </div>


              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>{minutes}</p>
                <p className='text-sm'>Minutes</p>
              </div>


              <div className='bg-white w-[60px] h-[60px] flex flex-col items-center rounded-full'>
                <p className='font-bold mt-1'>{seconds}</p>
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