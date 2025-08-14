import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
import { assets, ProductsData, ProductsSecondData } from '../assets/assets';

const Products = () => {


    return (
        <div className='px-[8%] mt-20'>
            <div className='flex items-center gap-4'>
                <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                <h2 className='text-[#DB4444] font-bold text-xl'>This Month</h2>
            </div>
            <div className='flex items-center justify-between py-2 gap-28'>
                <div className='flex items-center gap-15'>
                    <h2 className='text-3xl font-bold'>Best Selling Products</h2>
                </div>
                <div className='h-fit flex gap-3 items-center'>
                    <button className='bg-[#DB4444] block px-8 m-auto text-white py-2 text-md rounded-lg cursor-pointer'>View All</button>
                </div>
            </div>

            <div className='h-100 w-full mt-5 flex justify-around overflow-x-scroll scrollbarhide'>


                {
                    ProductsSecondData.map((product, index) => (
                        <div key={index} className='h-full w-[22%] min-w-[22%]  p-2'>
                            <div className='h-full'>
                                <div className='h-[60%] relative bg-gray-100 rounded-sm'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                        <img src={product.img} alt="" className='w-[60%] h-[60%]' />
                                    </div>
                                </div>

                                <div className='w-fit mt-2 flex flex-col gap-1'>
                                    <p className='font-semibold tracking-wider text-md'>{product.name}</p>
                                    <div className='flex gap-4'>
                                        <p className='text-md text-[#DB4444] font-semibold'>{product.discountprice}</p>
                                        <del className='text-md text-gray-500 font-semibold'>{product.price}</del>
                                    </div>
                                    <div className='py-1 flex items-center gap-1.5 starsdiv'>
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}


            </div>
                <hr className='mt-8 text-gray-300'/>
        </div>
    )
}

export default Products