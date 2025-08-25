import React from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faEye, faCartPlus, faBasketShopping } from '@fortawesome/free-solid-svg-icons'
import { WishlistData, all_products, assets } from '../assets/assets'
import Item from './Item'

const Wishlist = () => {
    return (
        <div className='px-[8%] mt-20 font'>
            <div className='flex justify-between items-center'>
                <p className='text-xl'>{'Wishlist(4)'}</p>
                <button className='border px-6 text-sm py-2 rounded-lg'>Move All To Bag</button>
            </div>

            <div className='h-100 w-full mt-5 flex justify-between overflow-x-scroll scrollbarhide'>


                {
                   all_products.map((item, i) => {
                        if(item.category === "wishlist")
                        return (
                            <Item key={i} id={item.id} name={item.name} image={item.img} discountprice={item.discountprice} price={item.price} discount={item.discount}/>
                        )
                    }) 
                }
            </div>

            <div className='flex justify-between items-center mt-20'>
                <div className='flex items-center gap-4'>
                    <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                    <h2 className='font-bold text-xl'>Just For You</h2>
                </div>
            <button className='border px-5 py-1 rounded-lg'>See All</button>
            </div>

            <div className='h-100 w-full mt-5 flex justify-between overflow-x-scroll scrollbarhide'>


                {
                   all_products.map((item, i) => {
                        if(item.category === "productssecond")
                        return (
                            <Item key={i} id={item.id} name={item.name} image={item.img} discountprice={item.discountprice} price={item.price} discount={item.discount}/>
                        )
                    })}
            </div>
        </div>
    )
}

export default Wishlist