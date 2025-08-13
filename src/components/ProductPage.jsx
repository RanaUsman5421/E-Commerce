import React from 'react'
import { assets, ProductsSecondData } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinus, faPlus, faRecycle, faTruck } from '@fortawesome/free-solid-svg-icons'

const ProductPage = () => {
    return (
        <div className='px-[8%] mt-20'>
            <p> <span className='text-gray-400'>Account/ Gaming /</span>Havic HV G-92 Gamepad</p>

            <div className=' mt-20 flex justify-between'>
                <div className='w-[60%] h-fit flex gap-10'>
                    <div className='w-[25%] flex flex-col items-center gap-15 h-fit'>
                        <img src={assets.Productview1} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[130px]' />
                        <img src={assets.Productview2} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[130px]' />
                        <img src={assets.Productview3} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[130px]' />
                        <img src={assets.Productview4} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[130px]' />
                    </div>
                    <div className='flex justify-center items-center w-[100%] bg-gray-100 rounded-md'><img src={assets.Productview5} alt="" /></div>
                </div>



                <div className='w-[35%] h-fit px-5'>
                    <h2 className='text-3xl font-semibold'>Havic HV G-92 Gamepad</h2>
                    <div className='mt-3'>
                        <div className='flex items-center gap-2'>
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <p className='text-gray-500'>{"(150 Reviews) | "}</p>
                            <span className='text-[#00FF66]'>In Stock</span>
                        </div>
                        <p className='text-2xl mt-3 font-semibold'>$192.00</p>
                        <p className='mt-3'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

                        <hr className='text-gray-400 mt-5' />

                        <div className='flex gap-5 items-center py-2'>
                            <label htmlFor="" className='text-xl font-semibold'>Colours: </label>
                            <input type="radio" className='accent-[#DB4444] h-[20px] w-[20px] ' />
                            <input type="radio" className='accent-[#DB4444] h-[20px] w-[20px] ' />
                        </div>

                        <div className='flex gap-2 mt-2'>
                            <label htmlFor="" className='text-xl font-semibold'>Size: </label>
                            <div className='flex gap-3 text-center'>

                                <div className='border border-gray-400 hover:bg-[#DB4444] transition-colors duration-300 hover:text-white font-semibold text-md w-[35px] py-1 px-1.5 rounded-md'>XS</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-md w-[35px] py-1 px-1.5 rounded-md'>S</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-md w-[35px] py-1 px-1.5 rounded-md'>M</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-md w-[35px] py-1 px-1.5 rounded-md'>L</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-md w-[35px] py-1 px-1.5 rounded-md'>XL</div>
                            </div>
                        </div>


                        <div className='mt-4 h-12 flex gap-5 items-center w-full'>
                            <div className='flex items-center h-[100%]'>
                                <button className='px-2 py-2 rounded-bl-md rounded-tl-md border group hover:bg-[#DB4444] border-r-0'><FontAwesomeIcon icon={faMinus} className='text-black group-hover:text-white'/> </button>
                                <p className='px-6 border py-2  text-md'>2</p>
                                <button className='px-2 py-2 rounded-br-md rounded-tr-md border border-l-0 hover:bg-[#DB4444] group'><FontAwesomeIcon icon={faPlus} className='text-black group-hover:text-white'/> </button>
                            </div>

                            <button className='px-12 bg-[#DB4444] text-white py-2.5 rounded-md'>Buy Now</button>
                            <FontAwesomeIcon icon={faHeart} className='border text-3xl hover:bg-[#DB4444] hover:text-white p-1.5 rounded-lg'/>
                        </div>
                    </div>

                    <div className='border mt-6'>
                        <div className=' h-fit flex'>
                            <FontAwesomeIcon icon={faTruck} className='text-5xl px-5 py-5'/>
                            <div className='py-5'>
                                <p className='text-2xl font-semibold'>Free Delivery</p>
                                <p className='mt-3 border-b border-gray-400'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>

                        <hr />
                        <div className='h-fit flex'>
                            <FontAwesomeIcon icon={faRecycle} className='text-5xl px-5 py-5'/>
                            <div className='py-5'>
                                <p className='text-2xl font-semibold'>Return Delivery</p>
                                <p className='mt-3'>Free 30 Days Delivery Returns. <a href="" className='underline'> Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex items-center mt-30 gap-4'>
                <div className='w-[20px] h-[45px] rounded-md bg-[#DB4444] '></div>
                <h2 className='text-[#DB4444] font-bold text-2xl'>Related Items</h2>
            </div>


            <div className='h-100 w-full mt-5 flex justify-between overflow-x-scroll scrollbarhide'>
            
            
                            {
                                ProductsSecondData.map((product, index) => (
                                    <div key={index} className='h-full w-[22%] min-w-[22%]  p-2'>
                                        <div className='h-full'>
                                            <div className='h-[70%] relative bg-gray-100 rounded-sm'>
                                                <div className='flex items-center justify-center h-full w-full'>
                                                    <img src={product.img} alt="" className='w-[60%] h-[60%]' />
                                                </div>
                                                <div className='h-fit w-fit absolute top-3 flex flex-col gap-3 right-3'>
                                                    
                                                </div>
                                            </div>
            
                                            <div className='w-fit mt-2 flex flex-col gap-1'>
                                                <p className='font-semibold tracking-wider text-lg'>{product.name}</p>
                                                <div className='flex gap-4'>
                                                    <p className='text-xl text-[#DB4444] font-semibold'>{product.discountprice}</p>
                                                    <del className='text-xl text-gray-500 font-semibold'>{product.price}</del>
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

export default ProductPage