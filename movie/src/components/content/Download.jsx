import React from 'react'
import down from "../../assets/services_img.jpg"

const Download = () => {
    return (
        <div className='bg-[#1F1E24] p-5 md:px-10 md:py-36 lg:p-36'>
            <div className='flex flex-col lg:flex-row lg:gap-48'>
                <div className='py-5'>
                    <img src={down} alt="" />
                </div>
                <div className='flex-1'>
                    <div className=''>
                        <div className='pb-5 pt-5'>
                            <div></div>
                            <p className='text-[#bcbcbc] text-sm'>OUR SERVICES</p>
                        </div>
                        <p className='text-4xl text-white pb-3 font-bold'>Download Your Shows Watch Offline.</p>
                        <p className='text-[#bcbcbc] text-sm leading-6'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod tempor.There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration in some injected humour.</p>
                        <div className='py-10'>
                            <div className='flex pb-8 items-start gap-5 flex-col md:flex-row md:items-center'>
                                <span className="material-symbols-outlined text-5xl text-white border border-dashed border-yellow-300 p-5 rounded-full hover:bg-yellow-300">
                                    tv
                                </span>
                                <div>
                                    <p className='text-lg text-white'>Enjoy on Your TV</p>
                                    <p className='text-sm text-[#bcbcbc]'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                            <hr />
                            <div className='flex items-start pt-8 gap-5 flex-col md:flex-row md:items-center '>
                                <span className="material-symbols-outlined text-5xl text-white border border-dashed border-yellow-300 p-5 rounded-full hover:bg-yellow-300">
                                    videocam
                                </span>
                                <div>
                                    <p className='text-lg text-white'>Watch Anywhere</p>
                                    <p className='text-sm text-[#bcbcbc]'>Lorem ipsum dolor sit amet, consecetur adipiscing elit, sed do eiusmod tempor.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Download