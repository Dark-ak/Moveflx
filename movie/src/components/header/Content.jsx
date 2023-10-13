import React, { useLayoutEffect } from 'react'
import gsap from "gsap"

const Content = () => {

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".anim",{
                y:50,
                opacity:0,
                duration:1.5
            })
        })

        return () => ctx.revert();

    },[])
    return (
        <div className='pt-44 px-4 md:px-10'>
            <div className='flex flex-col items-start gap-2 lg:w-[50%] anim'>
                <p className='text-2xl text-yellow-300 font-bold'>Movflx</p>
                <p className='text-5xl text-white font-bold'>Unlimited <span className='text-yellow-300'>Movie</span>,TVs Shows, & More.</p>
                <div className='flex items-center rounded-full text-white px-9 py-4 mt-5 border-2 border-yellow-300  gap-2 bg-[#12151e] cursor-pointer group hover:bg-yellow-300 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white group-hover:text-black">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                    <p className='uppercase text-xs font-bold '>Watch Now</p>
                </div>
            </div>
        </div>
    )
}

export default Content