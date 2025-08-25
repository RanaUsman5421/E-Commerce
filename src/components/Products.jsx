import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEye, faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { all_products} from '../assets/assets';
import Item from './Item';
import FlashSaleTimer from './FlashSaleTimer';

const Products = () => {

    const targetDate = new Date('2025-08-30T00:00:00').getTime();
    
    return (
        <div className='px-[8%] mt-15'>
            <div className='flex items-center gap-4'>
                <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                <h2 className='text-[#DB4444] font-bold text-xl'>Today's</h2>
            </div>
            <div className='flex items-center justify-between py-2 gap-28'>
                <div className='flex items-center gap-15'>
                    <h2 className='text-3xl font-bold'>Flash Sales</h2>
                    <FlashSaleTimer targetDate={targetDate} />
                </div>
                <div className='h-fit flex gap-3 items-center'>
                    <FontAwesomeIcon icon={faArrowLeft} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
                    <FontAwesomeIcon icon={faArrowRight} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
                </div>
            </div>

            <div className='h-100 w-full mt-5 flex justify-around overflow-x-scroll scrollbarhide'>
                {
            all_products.map((item, i) => {
                if(item.category === "products")
                return (
                    <Item id={item.id} key={i} name={item.name} image={item.img} discountprice={item.discountprice} price={item.price} discount={item.discount}/>
                )
            })
         }
            </div>
                <button className='bg-[#DB4444] block px-8 m-auto text-white py-2 text-md rounded-lg cursor-pointer'>View All Products</button>
                <hr className='mt-8 text-gray-300'/>
        </div>
    )
}

export default Products