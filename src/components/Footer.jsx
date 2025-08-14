import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCaretRight } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../assets/assets'
import '../App.css'

const Footer = () => {
    return (
        <div className='bg-black mt-20 h-fit px-[8%] font'>
            <div className='h-fit flex justify-between text-white'>

                <div className='h-fit w-[19%] py-10 px-5'>
                    <h2 className='text-xl font-semibold'>Exclusive</h2>
                    <p className='font-semibold mt-2 text-md'>Subscribe</p>
                    <p className='mt-3 text-md'>Get 10% off your first order</p>

                    <div className='mt-3'>
                        <input type="text" placeholder='Enter Email' className='py-1 px-2 border-gray-300 border rounded-lg w-[90%]'/>
                        <button className='text-black bg-white py-1 px-6 mt-3 rounded-md text-sm'>Subscribe</button>
                    </div>
                </div>


                <div className='h-fit w-[19%] py-10 px-5'>
                    <h2 className='text-xl font-semibold'>Support</h2>
                    <p className='mt-3 text-md'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                    <p className='mt-5 text-md'>exclusive@gmail.com</p>
                    <p className='mt-5 text-md'>+88015-88888-9999</p>

                </div>



                <div className='h-fit w-fit py-10 px-5'>
                    <h2 className='text-xl font-semibold'>Account</h2>
                    <ul className='leading-9 text-sm'>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Login/Register</a></li>
                        <li><a href="">Cart</a></li>
                        <li><a href="">Wishlist</a></li>
                        <li><a href="">Shop</a></li>
                    </ul>
                </div>



                <div className='h-fit w-fit py-10 px-5'>
                    <h2 className='text-xl font-semibold'>Quick Link</h2>
                    <ul className='leading-10 text-md'>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Terms of use</a></li>
                        <li><a href="">FAQ</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>


                <div className='h-fit w-[25%] py-10 px-5'>
                    <h2 className='text-xl font-semibold'>Download App</h2>
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
            <p className='text-gray-500 p-3 text-center'> &#169; Copyright Rimel 2022. All right reserved</p>
        </div>
    )
}

export default Footer