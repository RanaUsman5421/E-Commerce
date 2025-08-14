import React from 'react'
import '../App.css'
import { assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    return (
        <div className='px-[8%] mt-15'>
            <p> <span className='text-gray-400'>Home/</span>Cart</p>

            <div className='mt-10 font flex flex-col gap-15'>
                <div className='h-13 rounded-lg grid grid-cols-4 items-center shadow-lg shadow-gray-300 text-sm border px-3'>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>


                <div className='h-13 rounded-lg shadow-lg shadow-gray-300 grid grid-cols-4 items-center text-sm border px-3'>
                    <div className='flex items-center gap-4'><img src={assets.Product3} alt="" width={'50px'} /> <p>LCD Monitor</p> </div>
                    <p>$650</p>
                    <div className='flex gap-2 px-3 p-1 rounded-lg border-gray-600 items-center'>
                        <p className='text-xl text-gray-500'>1</p>
                        <div className='flex flex-col col-span-1'>
                            <FontAwesomeIcon icon={faCaretUp} />
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                    <p>$650</p>
                </div>


                <div className='h-13 rounded-lg shadow-lg grid grid-cols-4 items-center content-center text-sm shadow-gray-300 border px-3'>
                    <div className='flex items-center gap-4'><img src={assets.Product3} alt="" width={'50px'} /> <p>LCD Monitor</p> </div>
                    <p>$650</p>
                    <div className='flex gap-2 px-3 p-1 rounded-lg border-gray-600 items-center'>
                        <p className='text-xl text-gray-500'>1</p>
                        <div className='flex flex-col'>
                            <FontAwesomeIcon icon={faCaretUp} />
                            <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                    </div>
                    <p>$650</p>
                </div>



            </div>

            <div className='mt-10 flex justify-between'>
                <button className='border-2 border-gray-400 px-8 py-2 rounded-lg text-md'>Return to Shop</button>
                <button className='border-2 border-gray-400 px-8 py-2 rounded-lg text-md'>Update Cart</button>
            </div>

            <div className='mt-15'>
                <input type="text" placeholder='Coupon Code' className='border border-gray-400 px-2 py-2 rounded-lg w-[18%]' />
                <button className='text-white bg-[#DB4444] px-7 py-2 rounded-lg ml-3'>Apply Coupon</button>
            </div>

            <div className='flex justify-end'>
                <div className='p-4 w-[25%] rounded-md border-gray-600 border-2'>
                    <h2 className='text-xl font-semibold'>Cart Total</h2>
                    <div className='flex justify-between mt-5 border-b border-gray-400 pb-3'>
                        <p>SubTotal</p>
                        <p>$1750</p>
                    </div>

                    <div className='flex justify-between mt-5 border-b border-gray-400 pb-3'>
                        <p>Shipping</p>
                        <p>Free</p>
                    </div>


                    <div className='flex justify-between mt-5 border-b border-gray-400 pb-3'>
                        <p>Total</p>
                        <p>$1750</p>
                    </div>

                    <button className='bg-[#DB4444] text-white px-7 py-3 rounded-sm m-auto mt-7 block'>Process to Checkout</button>
                </div>
            </div>


        </div>
    )
}

export default Cart