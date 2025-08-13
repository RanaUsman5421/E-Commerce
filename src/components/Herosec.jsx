import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCaretRight, faCaretSquareRight, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../assets/assets'

const Herosec = () => {
    return (
        <div className='px-[8%] flex'>
            <div className='pt-15 pb-5 border-r-2 border-gray-300 w-[25%]'>
                <div className='w-[70%]'>
                    <ul className='space-y-3'>
                        <li className='text-xl flex items-center justify-between'>Women's Fashion <FontAwesomeIcon icon={faArrowRight} className='text-xl' /> </li>
                        <li className='text-xl flex items-center justify-between'>Men's Fashion <FontAwesomeIcon icon={faArrowRight} className='text-xl' /></li>
                        <li className='text-xl' >Electronics</li>
                        <li className='text-xl'>Home & LifeStyle</li>
                        <li className='text-xl'>Medicine</li>
                        <li className='text-xl'>Sports & Outdoors</li>
                        <li className='text-xl'>Baby's & Toys</li>
                        <li className='text-xl'>Groceries & Pets</li>
                        <li className='text-xl'>Health & Beauty</li>
                    </ul>
                </div>
            </div>

            <div className='border w-full h-auto mt-15 ml-10 bg-[#000000] flex'>

                <div className='p-10 w-[45%] flex flex-col gap-5'>
                    <div className='w-fit flex items-center'>
                        <img src={assets.AppleLogo} alt="" className='inline h-13' />
                        <p className='text-white inline text-xl ml-5'>iPhone 14 Series</p>
                    </div>
                    <h1 className='text-white text-7xl leading-19'>Up to 10% off Voucher</h1>
                    <div>
                        <a href="" className='text-white border-b-2 border-gray-400 text-xl p-2'>Shop Now</a>
                        <FontAwesomeIcon icon={faArrowRight}  className='text-white ml-2'/>
                    </div>
                </div>

                <div className=''>
                    <img src={assets.Ihpone} alt=""  className='mt-8'/>
                </div>

            </div>
        </div>
    )
}

export default Herosec