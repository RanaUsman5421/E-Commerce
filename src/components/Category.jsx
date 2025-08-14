import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { assets, CategoriesData } from '../assets/assets'

const Category = () => {
  return (
    <div className='px-[8%] mt-15'>
      <div className='flex items-center gap-4'>
        <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
        <h2 className='text-[#DB4444] font-bold text-xl'>Categories</h2>
      </div>
      <div className='flex items-center justify-between py-2 gap-28'>
        <div className='flex items-center gap-15'>
          <h2 className='text-3xl font-bold'>Browse By Category</h2>
        </div>
        <div className='h-fit flex gap-3 items-center'>
          <FontAwesomeIcon icon={faArrowLeft} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
          <FontAwesomeIcon icon={faArrowRight} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
        </div>
      </div>

      <div className='h-fit mt-4 flex justify-between'>

        {CategoriesData.map((category, index) => (
          <div key={index} className='h-[120px] cursor-pointer hover:bg-[#DB4444] transition-colors  w-[150px] border border-gray-300 rounded-lg'>
            <img src={category.img} alt="" className='mt-3 block m-auto' />
            <p className='text-center text-md font-semibold mt-2'>{category.name}</p>
          </div>
        ))}
      </div>

      <hr className='mt-20 text-gray-300' />
    </div>

  )
}

export default Category