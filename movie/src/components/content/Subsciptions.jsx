import React from 'react'

const Subsciptions = () => {
  return (
    <div className='bg-yellow-300 p-5'>
      <div className='flex flex-col items-center text-center lg:flex-row lg:justify-evenly lg:gap-28'>
        <div>
          <p className='uppercase text-[30px] font-poppins font-bold'>trial start first 30 days</p>
          <p className='text-sm'>Enter your email to create or restart your membership</p>
        </div>
        <div className='w-[100%] lg:w-[40%]'>
          <div className='p-5 w-[100%] m-3 flex rounded-md bg-white md:p-0 md:py-1 md:pl-6 md:pr-1 md:mt-6 justify-between'>
            <input type="text" placeholder='Enter Your Email' className='text-sm lg:w-[50%]  focus:outline-none' />
            <button className='bg-[#171d22] rounded-md px-10 py-4 font-semibold text-yellow-300 text-sm hidden md:inline hover:bg-yellow-300 hover:text-black'>GET STARTED</button>
          </div>

          <button className='bg-[#171d22] rounded-md px-10 py-4 font-semibold text-yellow-300 text-sm md:hidden'>GET STARTED</button>
        </div>

      </div>
    </div>
  )
}

export default Subsciptions