import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
  return (
    <div className='px-[8%] mt-20'>
      <p className='font'>Home / Contact</p>

      <div className='mt-20 h-[80vh] flex gap-10'>
        
        <div className='w-fit h-fit rounded-lg shadow-lg shadow-gray-300 py-8 px-5 font'>
          <div className='flex items-center gap-5'>
            <FontAwesomeIcon icon={faPhone} className='text-white text-2xl p-3 rounded-full bg-[#DB4444]'/>
            <h2 className='text-3xl font-semibold'>Call To Us</h2>
          </div>
          <p className='mt-5 text-lg'>We are available 24/7, 7 days a week.</p>
          <p className='mt-5 text-lg'>Phone: +8801611112222</p>

          <hr className='text-gray-400 mt-7'/>


          <div className='flex items-center gap-5 mt-10'>
            <FontAwesomeIcon icon={faEnvelope} className='text-white text-2xl p-3 rounded-full bg-[#DB4444]'/>
            <h2 className='text-3xl font-semibold'>Write To Us</h2>
          </div>
          <p className='mt-5 text-lg'>Fill out our form and we will contact <br /> you within 24 hours.</p>
          <p className='mt-5 text-lg'>Emails: customer@exclusive.com</p>
          <p className='mt-3 text-lg'>Emails: support@exclusive.com</p>
        </div>


        


        <div className='shadow-lg shadow-gray-300 relative w-[70%] h-[81%] rounded-lg py-10 px-8 font'>
          <div className='flex items-center gap-5'>
          <input type="text" placeholder='Your Name' className='bg-gray-100 py-5 px-3 rounded-md w-[33%]'/>
          <input type="text" placeholder='Your Phone' className='bg-gray-100 py-5 px-3 rounded-md w-[33%]'/>
          <input type="text" placeholder='Your Email' className='bg-gray-100 py-5 px-3 rounded-md w-[33%]'/>
          </div>
          <textarea name="" id="" className='bg-gray-100 py-5 mt-7 resize-none h-[65%] px-3 rounded-md w-full' placeholder='Your Message'></textarea>
          <button className='bg-[#DB4444] text-white py-3 px-5 rounded-md mt-5 absolute bottom-4 right-8'>Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default Contact