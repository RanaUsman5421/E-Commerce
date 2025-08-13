import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { assets, CategoriesData } from '../assets/assets'

const Category = () => {
  return (
    <div className='px-[8%] mt-20'>
      <div className='flex items-center gap-4'>
        <div className='w-[20px] h-[45px] rounded-md bg-[#DB4444] '></div>
        <h2 className='text-[#DB4444] font-bold text-2xl'>Categories</h2>
      </div>
      <div className='flex items-center justify-between py-2 gap-28'>
        <div className='flex items-center gap-15'>
          <h2 className='text-5xl font-bold'>Browse By Category</h2>
        </div>
        <div className='h-fit flex gap-3 items-center'>
          <FontAwesomeIcon icon={faArrowLeft} className='p-2 text-xl bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
          <FontAwesomeIcon icon={faArrowRight} className='p-2 text-xl bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
        </div>
      </div>

      <div className='h-fit mt-9 flex justify-between'>

        {CategoriesData.map((category, index) => (
          <div key={index} className='h-[170px] cursor-pointer hover:bg-[#DB4444] transition-colors  w-[200px] border border-gray-300 rounded-lg'>
            <img src={category.img} alt="" className='mt-10 block m-auto' />
            <p className='text-center text-lg font-semibold mt-2'>{category.name}</p>
          </div>
        ))}
      </div>

      <hr className='mt-20 text-gray-300' />
    </div>

  )
}

export default Category