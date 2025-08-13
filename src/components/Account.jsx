import React from 'react'
import '../App.css'

const Account = () => {
    return (
        <div className='px-[8%] mt-20 font'>
            <div className='flex justify-between items-center'>
                <p><span className=''>Home/ </span>Account</p>
                <p className='text-[#DB4444]'><span className='text-black'>Welome!</span>Usman</p>
            </div>


            <div className='mt-20 h-fit flex justify-between'>
                <div className='w-[30%] h-fit'>
                    <h2 className='text-xl font-semibold'>Manage My Accout</h2>
                    <ul className='px-12 mt-4 leading-7'>
                        <li><a href="" className='text-[#DB4444]'>My Profile</a></li>
                        <li><a href="" className='text-gray-400'>Address Book</a></li>
                        <li><a href="" className='text-gray-400'>My Payment Options</a></li>
                    </ul>


                    <h2 className='text-xl mt-5 font-semibold'>My Orders</h2>
                    <ul className='px-12 mt-4 leading-7'>
                        <li><a href="" className='text-gray-400'>My Returns</a></li>
                        <li><a href="" className='text-gray-400'>My Cancellations</a></li>
                    </ul>

                    <h2 className='text-xl mt-5 font-semibold'>My Wishlist</h2>
                </div>



                <div className='w-[65%] h-fit shadow-lg shadow-gray-300 p-6'>
                    <h2 className='text-[#DB4444] text-xl'>Edit Profile</h2>


                    <div className='flex'>

                        <div className='w-[50%]'>

                            <label htmlFor="name" className='block mt-6 '>First Name</label>
                            <input type="text" placeholder='MD' className='bg-gray-100 w-[90%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />

                            <label htmlFor="name" className='block mt-6 '>Email</label>
                            <input type="text" placeholder='macktech28@gmail.com' className='bg-gray-100 w-[90%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />
                        </div>


                        <div className='w-[50%]'>

                            <label htmlFor="name" className='block mt-6 '>Last Name</label>
                            <input type="text" placeholder='Usman Asghar' className='bg-gray-100 w-[90%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />

                            <label htmlFor="name" className='block mt-6 '>Address</label>
                            <input type="text" placeholder='Attari Saroba Lahore.' className='bg-gray-100 w-[90%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />
                        </div>
                    </div>

                    <h2 className='mt-6 font-semibold text-xl'>Password Changes</h2>
                    <input type="text" placeholder='Current Password' className='bg-gray-100 w-[95%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />
                    <input type="text" placeholder='New Password' className='bg-gray-100 w-[95%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />
                    <input type="text" placeholder='Confirm New Password' className='bg-gray-100 w-[95%] mt-2 py-3 outline-0 border-0  pl-3 rounded-lg' />
                    <div className='flex gap-4 justify-end w-[95%]'>
                        <button className=' py-3 px-10 rounded-md  mt-4'>Cancel</button>
                        <button className='bg-[#DB4444] text-white py-3 px-10 rounded-sm mt-4'>Save Changes</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Account