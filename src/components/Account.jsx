import React from 'react'
import '../App.css'
import { useLocation } from 'react-router-dom'

const Account = () => {
    const path = useLocation().pathname;
    return (
        <div className='px-[8%] mt-10 font'>
            <div className='flex justify-between items-center'>
                <p><span className=''>Home/ </span>Account</p>
                <p className='text-[#DB4444]'><span className='text-black'>Welome!</span>Usman</p>
            </div>


            <div className='mt-10 h-fit flex justify-between'>
                <div className='w-[30%] h-fit'>
                    <h2 className='text-lg font-semibold'>Manage My Accout</h2>
                    <ul className='px-8 mt-2 leading-7'>
                        <li><a href="" className='text-[#DB4444] text-sm'>My Profile</a></li>
                        <li><a href="" className='text-gray-400 text-sm'>Address Book</a></li>
                        <li><a href="" className='text-gray-400 text-sm'>My Payment Options</a></li>
                    </ul>


                    <h2 className='text-lg mt-5 font-semibold'>My Orders</h2>
                    <ul className='px-8 mt-2 leading-7'>
                        <li><a href="" className='text-gray-400 text-sm'>My Returns</a></li>
                        <li><a href="" className='text-gray-400 text-sm'>My Cancellations</a></li>
                    </ul>

                    <h2 className='text-lg mt-5 font-semibold'>My Wishlist</h2>
                </div>



                <div className='w-[65%] h-fit shadow-lg shadow-gray-300 p-6'>
                    <h2 className='text-[#DB4444] text-lg'>Edit Profile</h2>


                    <div className='flex'>

                        <div className='w-[50%]'>

                            <label htmlFor="name" className='block mt-3 text-sm'>First Name</label>
                            <input type="text" placeholder='MD' className='text-sm bg-gray-100 w-[90%] mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />

                            <label htmlFor="name" className='block mt-3 text-sm'>Email</label>
                            <input type="text" placeholder='macktech28@gmail.com' className='text-sm bg-gray-100 w-[90%] mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />
                        </div>


                        <div className='w-[50%]'>

                            <label htmlFor="name" className='block mt-3 text-sm'>Last Name</label>
                            <input type="text" placeholder='Usman Asghar' className='text-sm bg-gray-100 w-[90%] mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />

                            <label htmlFor="name" className='block mt-3 text-sm'>Address</label>
                            <input type="text" placeholder='Attari Saroba Lahore.' className='bg-gray-100 w-[90%] mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />
                        </div>
                    </div>

                    <h2 className='mt-6 font-semibold text-lg'>Password Changes</h2>
                    <input type="text" placeholder='Current Password' className='bg-gray-100 w-[95%] text-sm mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />
                    <input type="text" placeholder='New Password' className='bg-gray-100 w-[95%] text-sm mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />
                    <input type="text" placeholder='Confirm New Password' className='bg-gray-100 w-[95%] text-sm mt-2 py-2 outline-0 border-0  pl-3 rounded-lg' />
                    <div className='flex gap-4 justify-end w-[95%]'>
                        <button className=' py-3 px-10 rounded-md text-sm  mt-4'>Cancel</button>
                        <button className='bg-[#DB4444] text-white py-3 px-8 text-sm rounded-sm mt-4'>Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Account