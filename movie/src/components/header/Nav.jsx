import React, {useState} from 'react'
import logo from "../../assets/logo.png"
import gsap from 'gsap'

const Nav = () => {

    const [open, setOpen] = useState()

    const handle = () => {
        if(open){
            gsap.to(".nav",{
                right:0,
                duration:1.5
            })
            gsap.to(".cross",{
                rotate:135,
                duration:2
            })
            setOpen(false)
        }
        else{
            gsap.to(".nav", {
                right:-500,
                duration:1.5
            })
            setOpen(true)

            gsap.to(".cross",{
                rotate:-130,
                duration:2
            })
        }
    }

    return (
        <div>
            <div className='relative z-1 '>
                <div className='absolute nav bg-[#171d22] -right-96 h-[100vh]'>
                    <div className='flex items-center gap-16 px-7 py-5'>
                        <img src={logo} alt="" />
                        <span className="material-symbols-outlined text-4xl text-white cross" onClick={handle}>
                            add
                        </span>
                    </div>

                    <div className='text-white px-2'>
                        <p className='px-6 py-3 border-y-2 border-slate-400 border-opacity-25'>Home</p>
                        <p className='px-6 py-3 border-b-2 border-slate-400 border-opacity-25'>Movie</p>
                        <p className='px-6 py-3 border-b-2 border-slate-400 border-opacity-25'>Tv Show</p>
                        <p className='px-6 py-3 border-b-2 border-slate-400 border-opacity-25'>Pricing</p>
                        <p className='px-6 py-3 border-b-2 border-slate-400 border-opacity-25'>Blog</p>
                        <p className='px-6 py-3 border-b-2 border-slate-400 border-opacity-25'>Contacts</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between p-5 md:px-10 lg:p-14'>
                <div className='cursor-pointer'>
                    <img src={logo} alt="" />
                </div>

                <div className='uppercase duration-500 gap-9 hidden lg:flex z-50'>
                    <p className='font-bold text-white hover:text-yellow-300 cursor-pointer'>Home</p>
                    <p className='font-bold text-white hover:text-yellow-300 cursor-pointer'>Movie</p>
                    <p className='font-bold text-white hover:text-yellow-300 cursor-pointer'>TV show</p>
                    <p className='font-bold text-white hover:text-yellow-300 cursor-pointer'>Pricing</p>
                    <p className='font-bold text-white hover:text-yellow-300 cursor-pointer'>Blog</p>
                    <p className='font-bold text-white hover:text-yellow-300 cursor-pointer'>Contact Us</p>
                </div>

                <div onClick={handle} className='lg:hidden'> 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-10 h-10 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>

                <div className='hidden lg:inline'>
                    <button className='px-10 py-3 rounded-full border-yellow-300 border text-white bg-[#12151e] hover:bg-yellow-300 hover:text-black font-bold duration-500'>Sign in</button>
                </div>
            </div>
        </div>
    )
}

export default Nav