import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCartPlus, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { WishlistData, assets } from '../assets/assets'

const Wishlist = () => {
    return (
        <div className='px-[8%] mt-20 font'>
            <div className='flex justify-between items-center'>
                <p className='text-xl'>{'Wishlist(4)'}</p>
                <button className='border px-6 text-sm py-2 rounded-lg'>Move All To Bag</button>
            </div>

            <div className='h-100 w-full mt-5 flex justify-between overflow-x-scroll scrollbarhide'>


                {
                    WishlistData.map((product, index) => (
                        <div key={index} className='h-full w-[22%] min-w-[22%]  p-2'>
                            <div className='h-full'>
                                <div className='h-[60%] relative bg-gray-100 rounded-sm parentdiv'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                        <img src={product.img} alt="" className='w-[60%] h-[60%]' />
                                    </div>
                                    <p className='text-white absolute top-2 left-2 bg-[#DB4444] w-fit px-2 py-0.5 rounded-md text-sm'>{product.discount}</p>
                                    <div className='h-fit w-fit absolute top-3 flex flex-col gap-3 right-3'>
                                        <FontAwesomeIcon icon={faHeart} className='text-sm p-2 bg-white rounded-full' />
                                        <FontAwesomeIcon icon={faEye} className='text-sm p-2 bg-white rounded-full' />
                                    </div>
                                    <button className='bg-black absolute bottom-0 text-white w-[100%] py-2 rounded-b-lg mybutton'> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
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

            <div className='flex justify-between items-center mt-20'>
                <div className='flex items-center gap-4'>
                    <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                    <h2 className='font-bold text-xl'>Just For You</h2>
                </div>
            <button className='border px-5 py-1 rounded-lg'>See All</button>
            </div>

            <div className='h-100 w-full mt-5 flex justify-between overflow-x-scroll scrollbarhide'>


                {
                    WishlistData.map((product, index) => (
                        <div key={index} className='h-full w-[22%] min-w-[22%]  p-2'>
                            <div className='h-full'>
                                <div className='h-[60%] relative bg-gray-100 rounded-sm parentdiv'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                        <img src={product.img} alt="" className='w-[60%] h-[60%]' />
                                    </div>
                                    <p className='text-white absolute top-2 left-2 bg-[#DB4444] w-fit px-2 py-0.5 rounded-md text-sm'>{product.discount}</p>
                                    <div className='h-fit w-fit absolute top-3 flex flex-col gap-3 right-3'>
                                        <FontAwesomeIcon icon={faHeart} className='text-sm p-2 bg-white rounded-full' />
                                        <FontAwesomeIcon icon={faEye} className='text-sm p-2 bg-white rounded-full' />
                                    </div>
                                    <button className='bg-black absolute bottom-0 text-white w-[100%] py-2 rounded-b-lg mybutton'> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
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
        </div>
    )
}

export default Wishlist