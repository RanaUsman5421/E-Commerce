import React from 'react'
import '../App.css'
import { assets } from '../assets/assets';

const Checkout = () => {



    return (
        <div className='px-[8%] mt-15'>
            <p> <span className='text-gray-400'>Account / My Account / Product / View Cart / </span>Checkout</p>



            <div className='mt-10 flex justify-between font'>

                <div className='w-[40%] h-fit'>
                    <h1 className='text-2xl font-semibold'>Billing Details</h1>
                    <label htmlFor="name" className='block mt-3 text-sm text-gray-400'>First Name</label>
                    <input type="text" className='bg-gray-100 outline-0 border-0 pl-3 w-[90%] py-2 rounded-lg mt-1' />

                    <label htmlFor="name" className='block mt-6 text-gray-400 text-sm'>Company Name</label>
                    <input type="text" className='bg-gray-100 w-[90%] py-2 outline-0 border-0  pl-3 rounded-lg mt-1' />

                    <label htmlFor="name" className='block mt-6 text-gray-400 text-sm'>Street Address</label>
                    <input type="text" className='bg-gray-100 w-[90%] py-2 outline-0 border-0  pl-3 rounded-lg mt-1' />

                    <label htmlFor="name" className='block mt-6 text-gray-400 text-sm'>{"Apartment, Floor, etc. (Optional)"}</label>
                    <input type="text" className='bg-gray-100 w-[90%] py-2 outline-0 border-0  pl-3 rounded-lg mt-1' />

                    <label htmlFor="name" className='block mt-6 text-gray-400 text-sm'>Town/City</label>
                    <input type="text" className='bg-gray-100 w-[90%] py-2 outline-0 border-0  pl-3 rounded-lg mt-1' />

                    <label htmlFor="name" className='block mt-6 text-gray-400 text-sm'>Phone Number</label>
                    <input type="text" className='bg-gray-100 w-[90%] py-2 outline-0 border-0  pl-3 rounded-lg mt-1' />

                    <label htmlFor="name" className='block mt-6 text-gray-400 text-sm'>Email Address</label>
                    <input type="text" className='bg-gray-100 w-[90%] py-2 outline-0 border-0  pl-3 rounded-lg mt-1' />

                    <div className='flex mt-5 items-center'>
                        <input type="checkbox" className='accent-[#DB4444] h-4 w-4' />
                        <p className='ml-4'>Save this information for faster check-out next time</p>
                    </div>

                </div>

                <div className='w-[45%]'>
                    <div className='flex mt-20 w-[60%] justify-between items-center'>
                        <div className='flex h-fit items-center gap-3'><img src={assets.Product1} alt="" className='w-8' /><p className='text-sm'>H1 Gamepad</p></div>
                        <div><p className='text-sm'>$650</p></div>
                    </div>

                    <div className='flex mt-10 w-[60%] justify-between items-center'>
                        <div className='flex h-fit items-center gap-3'><img src={assets.Product3} alt="" className='w-8' /><p className='text-sm'>LCD Monitor</p></div>
                        <div><p className='text-sm'>$650</p></div>
                    </div>


                    <div className='flex border-b border-gray-400 pb-3 mt-5 w-[60%] justify-between items-center'>
                        <p className='text-sm'>SubTotal</p>
                        <p className='text-sm'>$1300</p>
                    </div>

                    <div className='flex border-b border-gray-400 pb-3 mt-5 w-[60%] justify-between items-center'>
                        <p className='text-sm'>Shipping</p>
                        <p className='text-sm'>Free</p>
                    </div>


                    <div className='flex mt-6 w-[60%] justify-between items-center'>
                        <p className='text-sm'>Total</p>
                        <p className='text-sm'>$1300</p>
                    </div>

                    <div className='flex mt-7 w-[60%] justify-between items-center'>
                        <div className='flex h-fit items-center gap-3'><input type="radio" className='w-4 h-4 accent-[#DB4444]' /><label htmlFor="" className='text-sm'>Bank</label></div>
                        <div><img src={assets.Payment} alt="" /></div>
                    </div>
                    <input type="radio"  className='mt-4 w-4 h-4 accent-[#DB4444]' /> <label htmlFor="" className='text-sm'>Cash On Delivery</label>

                    <div className='mt-10'>
                        <input type="text" placeholder='Coupon Code' className='border border-gray-400 px-2 py-2 rounded-lg w-[45%]' />
                        <button className='text-white bg-[#DB4444] px-7 py-2 rounded-lg ml-3'>Apply Coupon</button>
                    </div>

                    <button className='text-white mt-10 bg-[#DB4444] px-12 py-2 rounded-lg'>Place Order</button>
                    

                </div>

            </div>
        </div>
    )
}

export default Checkout