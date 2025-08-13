import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../assets/assets'
import '../App.css'

const Footer = () => {
    return (
        <div className='bg-black mt-20 h-fit px-[8%] font'>
            <div className='h-fit flex justify-between text-white'>

                <div className='h-fit w-[19%] py-15 px-5'>
                    <h2 className='text-3xl font-semibold'>Exclusive</h2>
                    <p className='font-semibold mt-3 text-xl'>Subscribe</p>
                    <p className='mt-5'>Get 10% off your first order</p>
                    <div className='mt-4 border flex items-center border-gray-400 p-2 rounded-md'>
                        <input type="text" placeholder='Enter email' className='border-none outline-none' />
                        <FontAwesomeIcon icon={faArrowRight} className='text-white cursor-pointer' />
                    </div>
                </div>


                <div className='h-fit w-[19%] py-15 px-5'>
                    <h2 className='text-3xl font-semibold'>Support</h2>
                    <p className='mt-3 text-lg'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='mt-5 text-lg'>exclusive@gmail.com</p>
                    <p className='mt-5 text-lg'>+88015-88888-9999</p>

                </div>



                <div className='h-fit w-[19%] py-15 px-5'>
                    <h2 className='text-3xl font-semibold'>Account</h2>
                    <ul className='leading-10 text-lg'>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Login/Register</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Wishlist</a></li>
                        <li><a href="">Shop</a></li>
                    </ul>
                </div>



                <div className='h-fit w-[19%] py-15 px-5'>
                    <h2 className='text-3xl font-semibold'>Quick Link</h2>
                    <ul className='leading-10 text-lg'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of use</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>


                <div className='h-fit w-[25%] py-15 px-5'>
                    <h2 className='text-3xl font-semibold'>Download App</h2>
                    <p className='mt-5 text-md'>Save $3 with App New User Only</p>


                    <div className='flex gap-4 mt-3'>
                        <div>
                            <img src={assets.Qrcode} alt="" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <img src={assets.Playstore} alt="" />
                            <img src={assets.Appstore} alt="" className='ml-3' />
                        </div>
                    </div>

                    <div className='flex py-3 justify-between items-center mt-2 w-[70%]'>
                        <a href=""><img src={assets.fb} alt="" /></a>
                        <a href=""><img src={assets.twitter} alt="" /></a>
                        <a href=""><img src={assets.insta} alt="" /></a>
                        <a href=""><img src={assets.linkedin} alt="" /></a>
                    </div>
                </div>
            </div>
            <hr className='text-gray-500'/>
            <p className='text-gray-500 p-5 text-center'> &#169; Copyright Rimel 2022. All right reserved</p>
        </div>
    )
}

export default Footer