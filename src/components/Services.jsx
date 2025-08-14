import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
    return (
        <div className='px-[8%] mt-20'>
            <div className='flex justify-around w-[70%] m-auto'>
                <div className='w-fit'>
                    <img src={assets.Delivery} alt="" className='block m-auto' />
                    <div>
                        <p className='font-bold text-md text-center mt-5'>FREE AND FAST DELIVERY</p>
                        <p className='text-center text-sm'>Free delivery for all orders over $140</p>
                    </div>
                </div>


                <div className='w-fit'>
                    <img src={assets.Services} alt="" className='block m-auto' />
                    <div>
                        <p className='font-bold text-md text-center mt-5'>24/7 CUSTOMER SERVICE</p>
                        <p className='text-center text-sm'>Friendly 24/7 customer support</p>
                    </div>
                </div>



                <div className='w-fit'>
                    <img src={assets.Safety} alt="" className='block m-auto' />
                    <div>
                        <p className='font-bold text-md text-center mt-5'>MONEY BACK GUARANTEE</p>
                        <p className='text-center text-sm'>We return money within 30 days</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Services