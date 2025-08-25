import React  from 'react'
import { useState, useContext } from 'react'
import { assets, ProductsSecondData } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faMinus, faPlus, faRecycle, faTruck } from '@fortawesome/free-solid-svg-icons'
import { ProductsContext } from '../Context/ProductsContext'
import { useParams } from 'react-router-dom'
import Item from './Item'
import { useLocation } from 'react-router-dom'


const ProductPage = () => {
    const path = useLocation().pathname;
    const [count, setCount] = useState(0);
     const { all_products } = useContext(ProductsContext);
    const { productId } = useParams();
    const product = all_products.find(e => e.id === parseInt(productId));
    return (
        <div className='px-[8%] mt-15'>
            <p className='text-sm'> <span className='text-gray-400 text-sm'>{path} </span>Havic HV G-92 Gamepad</p>

            <div className=' mt-10 flex justify-between'>
                <div className='w-[60%] h-fit flex gap-10'>
                    <div className='w-[20%] flex flex-col items-center gap-15 h-fit'>
                        <img src={product.img} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[100px] object-contain' />
                        <img src={product.img} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[100px] object-contain'/>
                        <img src={product.img} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[100px] object-contain' />
                        <img src={product.img} alt="" className='bg-gray-100 p-5 w-[130px] rounded-md h-[100px] object-contain' />
                    </div>
                    <div className='flex justify-center items-center w-[90%] bg-gray-100 rounded-md'><img src={product.img} alt="" /></div>
                </div>



                <div className='w-[35%] h-fit px-5'>
                    <h2 className='text-2xl font-semibold'>{product.name}</h2>
                    <div className='mt-3'>
                        <div className='flex items-center gap-1'>
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <img src={assets.Star} alt="" />
                            <p className='text-gray-500 text-sm'>{"(150 Reviews) | "}</p>
                            <span className='text-[#00FF66] text-sm'>In Stock</span>
                        </div>
                        <p className='text-xl mt-3 font-semibold'>{product.discountprice}</p>
                        <p className='mt-3 text-sm'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

                        <hr className='text-gray-400 mt-5' />

                        <div className='flex gap-5 items-center py-2'>
                            <label htmlFor="" className='text-lg font-semibold'>Colours: </label>
                            <input type="radio" className='accent-[#DB4444] h-[20px] w-[20px] ' />
                            <input type="radio" className='accent-[#DB4444] h-[20px] w-[20px] ' />
                        </div>

                        <div className='flex gap-2 mt-2'>
                            <label htmlFor="" className='text-lg font-semibold'>Size: </label>
                            <div className='flex gap-3 text-center'>

                                <div className='border border-gray-400 hover:bg-[#DB4444] transition-colors duration-300 hover:text-white font-semibold text-md w-[35px] py-1 px-1.5 rounded-md'>XS</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-sm w-[35px] py-1 px-1.5 rounded-md'>S</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-sm w-[35px] py-1 px-1.5 rounded-md'>M</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-sm w-[35px] py-1 px-1.5 rounded-md'>L</div>
                                <div className='border border-gray-400 hover:bg-[#DB4444] hover:text-white duration-300 font-semibold text-sm w-[35px] py-1 px-1.5 rounded-md'>XL</div>
                            </div>
                        </div>


                        <div className='mt-4 h-12 flex gap-5 items-center w-full'>
                            <div className='flex items-center h-[100%]'>
                                <button onClick={()=> count > 0 ? setCount(count-1): null} className='px-1 py-1 rounded-bl-md rounded-tl-md border group hover:bg-[#DB4444] border-r-0'><FontAwesomeIcon icon={faMinus} className='text-black group-hover:text-white'/> </button>
                                <p className='px-4 border py-1  text-md'>{count}</p>
                                <button onClick={()=>{setCount(count+1)}} className='px-1 py-1 rounded-br-md rounded-tr-md border border-l-0 hover:bg-[#DB4444] group'><FontAwesomeIcon icon={faPlus} className='text-black group-hover:text-white'/> </button>
                            </div>

                            <button className='py-2 px-6 bg-[#DB4444] text-white text-sm rounded-md'>Buy Now</button>
                            <FontAwesomeIcon icon={faHeart} className='border text-2xl hover:bg-[#DB4444] hover:text-white p-1 rounded-lg'/>
                        </div>
                    </div>

                    <div className='border mt-6'>
                        <div className=' h-fit flex'>
                            <FontAwesomeIcon icon={faTruck} className='text-3xl px-5 py-8'/>
                            <div className='py-3'>
                                <p className='text-xl font-semibold'>Free Delivery</p>
                                <p className='mt-3 text-sm border-b border-gray-400'>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>

                        <hr />
                        <div className='h-fit flex'>
                            <FontAwesomeIcon icon={faRecycle} className='text-3xl px-5 py-8'/>
                            <div className='py-5'>
                                <p className='text-xl font-semibold'>Return Delivery</p>
                                <p className='mt-3 text-sm'>Free 30 Days Delivery Returns. <a href="" className='underline'> Details</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='flex items-center mt-15 gap-4'>
                <div className='w-[15px] h-[35px] rounded-md bg-[#DB4444] '></div>
                <h2 className='text-[#DB4444] font-bold text-xl'>Related Items</h2>
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

export default ProductPage