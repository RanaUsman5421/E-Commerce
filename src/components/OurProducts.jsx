import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faHeart, faEye, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { assets, ProductsData, OurProduct } from '../assets/assets'

const OurProducts = () => {
    return (
        <div className='px-[8%] mt-15'>
            <div className='flex items-center gap-4'>
                <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                <h2 className='text-[#DB4444] font-bold text-xl'>Our Products</h2>
            </div>
            <div className='flex items-center justify-between py-2 gap-28'>
                <div className='flex items-center gap-15'>
                    <h2 className='text-3xl font-bold'>Explore Our Products</h2>
                </div>
                <div className='h-fit flex gap-3 items-center'>
                    <FontAwesomeIcon icon={faArrowLeft} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
                    <FontAwesomeIcon icon={faArrowRight} className='p-2 text-md bg-gray-300 rounded-full text-gray-600 cursor-pointer' />
                </div>
            </div>



            <div className='h-fit w-full mt-5 flex flex-wrap justify-between'>


                {
                    OurProduct.map((product, index) => (
                        <div key={index} className='h-[350px] w-[22%] min-w-[22%]  p-2'>
                            <div className='h-full'>
                                <div className='h-[70%] relative bg-gray-100 rounded-sm parentdiv'>
                                    <div className='flex items-center justify-center h-full w-full'>
                                        <img src={product.img} alt="" className='w-[60%] h-[60%]' />
                                    </div>
                                    
                                    <div className='h-fit w-fit absolute top-3 flex flex-col gap-3 right-3'>
                                        <FontAwesomeIcon icon={faHeart} className='text-md p-2 bg-white rounded-full' />
                                        <FontAwesomeIcon icon={faEye} className='text-md p-2 bg-white rounded-full' />
                                    </div>
                                    <button className='bg-black absolute mybutton bottom-0 text-white w-[100%] py-2 rounded-b-lg mybutton'> <FontAwesomeIcon icon={faCartPlus}/> Add to Cart</button>
                                </div>

                                <div className='w-fit mt-2 flex flex-col gap-1'>
                                    <p className='font-semibold tracking-wider text-md'>{product.name}</p>
                                    <div className='py-1 flex items-center gap-1.5 starsdiv'>
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <img src={assets.Star} alt="" />
                                        <p className='text-md text-[#DB4444] font-semibold'>{product.price}</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    ))}

            <button className='bg-[#DB4444] block px-8 m-auto text-white py-2 text-md rounded-lg cursor-pointer'>View All Products</button>

            </div>
            <hr className='mt-8 text-gray-300' />
        </div>
    )
}

export default OurProducts