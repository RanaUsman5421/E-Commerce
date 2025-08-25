import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className='h-full w-[22%] min-w-[22%]  p-2'>
            <div className='h-full'>
                <div className='h-[60%] relative bg-gray-100 rounded-sm parentdiv'>
                        <Link to={`/product/${props.id}`} className='h-full w-full flex items-center justify-center'>
                            <img src={props.image} alt="" className='w-[60%] h-[60%] object-contain' onClick={window.scrollTo(0,0)} />
                        </Link>
                    <p className='text-white absolute top-2 left-2 bg-[#DB4444] w-fit px-3 py-0.5 rounded-md text-sm'>{props.discount}</p>
                    <div className='h-fit w-fit absolute top-3 flex flex-col gap-3 right-3'>
                        <FontAwesomeIcon icon={faHeart} className='text-sm p-2 bg-white rounded-full' />
                        <FontAwesomeIcon icon={faEye} className='text-sm p-2 bg-white rounded-full' />
                    </div>
                    <button className='bg-black absolute bottom-0 text-white w-[100%] py-2 rounded-b-lg mybutton' onClick={() => addToCart(props.id)}> <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>
                </div>

                <div className='w-fit mt-2 flex flex-col gap-1'>
                    <p className='font-semibold tracking-wider text-md'>{props.name}</p>
                    <div className='flex gap-4'>
                        <p className='text-md text-[#DB4444] font-semibold'>{props.discountprice}</p>
                        <del className='text-md text-gray-500 font-semibold'>{props.price}</del>
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
    )
}

export default Item