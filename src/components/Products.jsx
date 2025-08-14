import React from 'react'
import { useState, useEffect } from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faEye, faHeart, faCartPlus} from '@fortawesome/free-solid-svg-icons';
import { assets, ProductsData, starFunction } from '../assets/assets';

const Products = () => {

    const targetDate = new Date('2025-08-20T00:00:00').getTime();
    const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());


    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);




    useEffect(() => {

        const timer = setInterval(() => {
            const distance = targetDate - Date.now();
            setTimeLeft(distance);

            if (distance < 0) clearInterval(timer);
        }, 1000)

        return () => clearInterval(timer);
    }, [targetDate]);





    return (
        <div className='px-[8%] mt-15'>
            <div className='flex items-center gap-4'>
                <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                <h2 className='text-[#DB4444] font-bold text-xl'>Today's</h2>
            </div>
            <div className='flex items-center justify-between py-2 gap-28'>
                <div className='flex items-center gap-15'>
                    <h2 className='text-3xl font-bold'>Flash Sales</h2>
                    <div className='flex gap-3'>
                        <div>
                            <p className='text-md'>Days</p>
                            <p className='text-2xl font-bold text-center'>{days}</p>
                        </div>

                        <div>
                            <p className='text-md'>Hours</p>
                            <p className='text-2xl font-bold text-center'>{hours}</p>
                        </div>

                        <div>
                            <p className='text-md'>Minutes</p>
                            <p className='text-2xl font-bold text-center'>{minutes}</p>
                        </div>

                        <div>
                            <p className='text-md'>Seconds</p>
                            <p className='text-2xl font-bold text-center'>{seconds}</p>
                        </div>
                    </div>
                </div>
                <div className='h-fit flex gap-3 items-center'>
                    <FontAwesomeIcon icon={faArrowLeft} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
                    <FontAwesomeIcon icon={faArrowRight} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
                </div>
            </div>

            <div className='h-100 w-full mt-5 flex justify-around overflow-x-scroll scrollbarhide'>


                {
                    ProductsData.map((product, index) => (
                        <div key={index} className='h-full w-[22%] min-w-[22%]  p-2'>
                            <div className='h-full'>
                                <div className='h-[60%] relative bg-gray-100 rounded-sm parentdiv'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                        <img src={product.img} alt="" className='w-[60%] h-[60%]' />
                                    </div>
                                    <p className='text-white absolute top-2 left-2 bg-[#DB4444] w-fit px-3 py-0.5 rounded-md text-sm'>{product.discount}</p>
                                    <div className='h-fit w-fit absolute top-3 flex flex-col gap-3 right-3'>
                                        <FontAwesomeIcon icon={faHeart} className='text-sm p-2 bg-white rounded-full' />
                                        <FontAwesomeIcon icon={faEye} className='text-sm p-2 bg-white rounded-full' />
                                    </div>
                                    <button className='bg-black absolute bottom-0 text-white w-[100%] py-2 rounded-b-lg mybutton'> <FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
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
                <button className='bg-[#DB4444] block px-8 m-auto text-white py-2 text-md rounded-lg cursor-pointer'>View All Products</button>
                <hr className='mt-8 text-gray-300'/>
        </div>
    )
}

export default Products