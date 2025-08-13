import React from 'react'
import { assets } from '../assets/assets'

const Featured = () => {
  return (
    <div className='px-[8%] mt-20'>
      <div className='flex items-center gap-4'>
        <div className='w-[20px] h-[45px] rounded-md bg-[#DB4444] '></div>
        <h2 className='text-[#DB4444] font-bold text-2xl'>Featured</h2>
      </div>
      <div className='flex items-center justify-between py-2 gap-28'>
        <div className='flex items-center gap-15'>
          <h2 className='text-5xl font-bold'>New Arrivals</h2>
        </div>
      </div>


      <div className='flex gap-6 mt-15'>
        <div className='w-[43%] h-fit bg-black pt-15 relative'>
          <img src={assets.PlayStation} alt="" className='block m-auto' />
          <div className='absolute p-5 bottom-2 w-[60%] leading-10'>
            <h2 className='text-white font-bold text-3xl'>Play Station 5</h2>
            <p className='text-white text-lg'>Black and White version of the PS5 coming out on sale.</p>
            <button className='text-white text-xl border-b-2 border-gray-400'>Shop Now</button>
          </div>
        </div>


        <div className='w-[50.5%] flex flex-col justify-between'>
          <div className='h-fit relative border bg-black flex'>
            <div className='p-5 leading-10'>
              <h2 className='text-white font-bold text-2xl'>Woman's Collection</h2>
              <p className='text-white text-lg'>Featured woman collections that give you another vibe.</p>
              <button className='text-white text-xl border-b-2 border-gray-400'>Shop Now</button>
            </div>
            <img src={assets.Woman} alt="" className='h-100% w-[55%]' />
          </div>

          <div className='h-[57%] flex justify-between mt-7'>
            <div className='w-[48%] relative h-full bg-black flex justify-center items-center border'>
              <div className='absolute bottom-2 left-2 p-3 leading-8'>
                <h2 className='text-white text-4xl font-bold'>Speakers</h2>
                <p className='text-white'>Amazon wireless speakers</p>
                <button className='text-white text-xl border-b-2 border-gray-400'>Shop Now</button>
              </div>
              <img src={assets.JblSpeakers} alt="" />
            </div>

            <div className='w-[48%] relative h-full bg-black flex justify-center items-center'>
              <div className='absolute bottom-2 left-2 p-3 leading-8'>
                <h2 className='text-white text-4xl font-bold'>Perfume</h2>
                <p className='text-white'>GUCCI INTENSE OUD EDP</p>
                <button className='text-white text-xl border-b-2 border-gray-400'>Shop Now</button>
              </div>
              <img src={assets.Gucci} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured