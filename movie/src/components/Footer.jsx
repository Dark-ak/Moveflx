import React from 'react'
import logo from "../assets/logo.png"

const Footer = () => {
    return (
        <div className='bg-[#12151e] '>
            <div className='flex flex-col bg-footer items-center p-10'>
                <img src={logo} alt="" className='p-8' />
                <div className='flex text-sm gap-5 justify-center flex-wrap items-center uppercase'>
                    <p className='text-[#c3c3c3] font-bold'>Home</p>
                    <p className='text-[#c3c3c3] font-bold'>Movie</p>
                    <p className='text-[#c3c3c3] font-bold'>tv show</p>
                    <p className='text-[#c3c3c3] font-bold'>Pages</p>
                    <p className='text-[#c3c3c3] font-bold'>Pricing</p>
                </div>
                <div className='bg-[#12151e] px-5 py-2 rounded-full flex gap-2 mt-10'>
                    <input type="text" className='text-white bg-[#12151e] focus:outline-none' />
                    <span className="material-symbols-outlined text-white  text-xl px-1">
                        search
                    </span>
                </div>
                <div className='flex text-xs gap-5 justify-center flex-wrap items-center mt-10 uppercase'>
                    <p className='text-[#c3c3c3] '>FAQ</p>
                    <p className='text-[#c3c3c3] '>Help center</p>
                    <p className='text-[#c3c3c3] '>Terms of use</p>
                    <p className='text-[#c3c3c3] '>Privacy</p>
                </div>
            </div>

            <div className='text-center bg-[#12151e] w-[100%] text-white text-sm py-3'>
                    <p>Copyright &#169;. All Rights Reserved By <span className='text-yellow-300'>Movflx</span></p>
                </div>
        </div>
    )
}

export default Footer