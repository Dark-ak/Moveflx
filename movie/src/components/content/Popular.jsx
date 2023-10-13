import React, { useEffect, useState } from 'react'
import Card from "./Card"
import api from "../../utilities/trending"

const Popular = () => {
    
    const [type, setType] = useState("movie")
    const [data, setData] = useState([])

    useEffect(() => {
        api.trending(type)
        .then(response => setData(response.data))
    },[type])

    const setShow = () => {
        setType("tv")
    }

    const setMovie = () => {
        setType("movie")
    }

    return (
        <div className='bg-black flex flex-col justify-center py-24'>
            <div className='flex justify-center items-center text-center flex-col gap-4'>
                <div>
                    <p className='text-yellow-300 text-xs'>ONLINE STREAMING</p>
                    <p className='font-bold text-white text-3xl'>Trending</p>
                </div>
                <div className='flex gap-5 flex-wrap items-center justify-center'>
                    <p className={`text-white font-bold text-xs px-5 py-3 cursor-pointer bg-[#20212b] rounded-full border-2 ${type=="movie" && "border-yellow-300"}`} onClick={setMovie}>Movies</p>
                    <p className={`text-white font-bold text-xs px-5 py-3 cursor-pointer bg-[#20212b] rounded-full border-2 ${type=="tv" && "border-yellow-300"}`} onClick={setShow}>TV Shows</p>
                </div>
            </div>
            <Card data={data} type={type}/>
        </div>
    )
}

export default Popular