import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faCaretRight, faCaretSquareRight, faSquareCaretRight } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../assets/assets'

const Herosec = () => {
    return (
        <div className='px-[8%] flex'>
            <div className='pt-10 pb-5 border-r-2 border-gray-300 w-[25%]'>
                <div className='w-[70%]'>
                    <ul className='space-y-3'>
                        <li className='text-md flex items-center justify-between'>Women's Fashion <FontAwesomeIcon icon={faArrowRight} className='text-md' /> </li>
                        <li className='text-md flex items-center justify-between'>Men's Fashion <FontAwesomeIcon icon={faArrowRight} className='text-md' /></li>
                        <li className='text-md' >Electronics</li>
                        <li className='text-md'>Home & LifeStyle</li>
                        <li className='text-md'>Medicine</li>
                        <li className='text-md'>Sports & Outdoors</li>
                        <li className='text-md'>Baby's & Toys</li>
                        <li className='text-md'>Groceries & Pets</li>
                        <li className='text-md'>Health & Beauty</li>
                    </ul>
                </div>
            </div>

            <div className='border w-full h-auto mt-10 ml-10 bg-[#000000] flex'>

                <div className='p-5 w-[50%] flex flex-col gap-5'>
                    <div className='w-fit flex items-center'>
                        <img src={assets.AppleLogo} alt="" className='inline w-[40px] h-[40px]' />
                        <p className='text-white inline text-md ml-5'>iPhone 14 Series</p>
                    </div>
                    <h1 className='text-white text-5xl leading-14'>Up to 10% off Voucher</h1>
                    <div>
                        <a href="" className='text-white border-b-2 border-gray-400 text-md p-2'>Shop Now</a>
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