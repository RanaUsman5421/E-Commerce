import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEye, faHeart} from '@fortawesome/free-solid-svg-icons';
import { all_products } from '../assets/assets';
import Item from './Item';

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
                    all_products.map((item, i) => {
                        if(item.category === "productssecond")
                        return (
                            <Item key={i} id={item.id} name={item.name} image={item.img} discountprice={item.discountprice} price={item.price} discount={item.discount}/>
                        )
                    })
                }


            </div>
                <hr className='mt-8 text-gray-300'/>
        </div>
    )
}

export default Products