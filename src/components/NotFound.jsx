import React from 'react'

const NotFound = () => {
  return (
    <div className='px-[8%] mt-20 font'>
        <p> <span className='text-gray-400'>Home/</span>404 Error</p>

        <div className='mt-20 py-20'>
            <h1 className='text-9xl text-center'>404 Not Found</h1>
            <p className='text-center mt-8 text-lg'>Your visited page not found. You may go home page.</p>
            <button className='bg-[#DB4444] text-white py-2 px-8 rounded block mt-8 m-auto'>Back to home page</button>
        </div>
    </div>
  )
}

export default NotFound