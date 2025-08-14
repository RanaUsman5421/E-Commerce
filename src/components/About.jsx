import React from 'react'
import { AboutData, assets } from '../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faHome, faHomeAlt, faHomeLg, faHomeUser, faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faDollar } from '@fortawesome/free-solid-svg-icons/faDollar'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons/faDollarSign'
import '../App.css'
import Services from './Services'


const About = () => {
  return (
    <div className='px-[8%] mt-15'>
      <p className='text-sm'> <span className='text-gray-400 text-md'>Home/</span>About</p>

      <div className='mt-15 h-[80vh] flex'>
        <div className='w-[50%] flex flex-col justify-center pl-0 p-25  h-[100%]'>
          <h1 className='text-5xl font-semibold'>Our Story</h1>
          <p className='mt-8 text-md'>Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
          <p className='mt-8 text-md'>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>

        <div className='w-[50%] h-[100%]'>
          <img src={assets.About} alt="" width={"100%"} height={"100%"} />
        </div>
      </div>


      <div className='h-65 mt-15 p-5 flex justify-between font'>
        <div className='border border-gray-400 rounded-lg group transition-color duration-300 ease-in-out hover:bg-[#DB4444] h-[100%] w-[22%] flex flex-col items-center justify-center'>
          <FontAwesomeIcon icon={faHomeUser} className='text-3xl bg-black group-hover:text-black group-hover:bg-white text-white py-3.5 px-2.5 icon rounded-full' />
          <p className='text-4xl font-bold mt-3 group-hover:text-white'>10.5K</p>
          <p className='mt-3 text-sm group-hover:text-white'>Sallers active our site</p>
        </div>

        <div className='border border-gray-400 rounded-lg h-[100%] w-[22%] group transition-color duration-300 ease-in-out hover:bg-[#DB4444] flex flex-col items-center justify-center'>
          <FontAwesomeIcon icon={faDollarSign} className='text-3xl bg-black group-hover:text-black group-hover:bg-white text-white py-3.5 px-2.5 icon rounded-full' />
          <p className='text-4xl font-bold mt-3 group-hover:text-white'>33K</p>
          <p className='mt-3 text-sm group-hover:text-white'>Monthly Product Sales</p>
        </div>


        <div className='border border-gray-400 rounded-lg group transition-color duration-300 ease-in-out hover:bg-[#DB4444] h-[100%] w-[22%] flex flex-col items-center justify-center'>
          <FontAwesomeIcon icon={faBagShopping} className='text-3xl bg-black group-hover:text-black group-hover:bg-white text-white py-3.5 px-2.5 icon rounded-full' />
          <p className='text-4xl font-bold mt-3 group-hover:text-white'>45.5K</p>
          <p className='mt-3 text-sm group-hover:text-white'>Customer active in our site</p>
        </div>


        <div className='border border-gray-400 rounded-lg group transition-color duration-300 ease-in-out hover:bg-[#DB4444]  h-[100%] w-[22%] flex flex-col items-center justify-center'>
          <FontAwesomeIcon icon={faSackDollar} className='text-3xl group-hover:text-black group-hover:bg-white bg-black text-white py-3.5 px-2.5 icon rounded-full' />
          <p className='text-4xl font-bold mt-3 group-hover:text-white'>25K</p>
          <p className='mt-3 text-sm group-hover:text-white'>Annual gross sale in our site</p>
        </div>
      </div>

      <div className='h-fit mt-20 flex justify-between'>

        {AboutData.map(item => (<div>
          <div className='bg-gray-100 w-fit py-3 px-5 pb-0'>
            <img src={item.img} alt="" />
          </div>
          <p className='text-2xl font-semibold mt-4'>{item.name}</p>
          <p className='text-md'>{item.role}</p>
          <div className='p-2 pl-0 flex gap-4'>
            <FontAwesomeIcon icon={faHome} className='text-lg ' />
            <FontAwesomeIcon icon={faHome} className='text-lg ' />
            <FontAwesomeIcon icon={faHome} className='text-lg ' />
          </div>
        </div>
      ))}

        

      </div>

      <Services/>

    </div>
  )
}

export default About