import React, { useLayoutEffect } from 'react'
import live from "../../assets/live_img.png"
import gsap from "gsap"


const Live = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".img", {
                opacity:0,
                x:50,
                duration:1.5
            })
        })

        return () => ctx.revert()
    })


    return (
        <div className=''>
            <div className='flex flex-col items-center gap-10 justify-between lg:flex-row p-5 md:pl-10 md:py-36 lg:pl-36'>
                <div className='flex flex-col items-start lg:flex-1'>
                    <div>
                        <div></div>
                        <p className='text-[#bcbcbc] text-sm mb-1'>Online Streaming</p>
                    </div>
                    <p className='text-4xl mb-4 font-bold'>Live Movie & TV Shows For Friends & Family</p>
                    <p className='text-[#6a6a6a] text-sm'>Lorem ipsum dolor sit amet, consecetur adipiscing elseddo eiusmod There are many variations of passages of lorem Ipsum available, but the majority have suffered alteration.</p>
                    <div className='pt-3 lg:flex gap-8'>
                        <p className='text-7xl font-bold shadow-line'>HD 4K</p>
                        <div>
                            <p className='text-4xl drop-shadow-2xl font-bold'>20K+</p>
                            <p className='font-bold'>Active Customer</p>
                        </div>
                    </div>

                    <div className=''>
                        <div className='flex items-center rounded-full text-black px-9 py-4 mt-5 cursor-pointerc border-yellow-300 border-2   gap-2 bg-yellow-400 shadow-md hover:bg-white'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-black">
                                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                            </svg>
                            <p className='uppercase text-xs font-bold'>Watch Now</p>
                        </div>
                    </div>
                </div>
                <div className='flex-3 img'>
                    <img src={live} alt="" className='' />
                </div>
            </div>
        </div>
    )
}

export default Live