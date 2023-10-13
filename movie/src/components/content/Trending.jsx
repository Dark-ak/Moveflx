import React, { useEffect, useState } from 'react'
import api from "../../utilities/popular"

const Trending = () => {

    const [data, setData] = useState([])
    const [type, setType] = useState("movie")
    const [genre, setGenre] = useState(12)
    const [name, setName] = useState("Action")
    const [open, setOpen] = useState(false)

    useEffect(() => {
        api.movies(type, genre).then(
            response => setData(response.data)
        )
    }, [type, genre])

    const setShow = () => {
        setType("tv")
        if(name=="Action") {
            setGenre(10759)
        }
    }

    const setMovie = () => {
        setType("movie")
        if(name=="Action"){
            setGenre(28)
        }
    }

    const handleAction = () => {
        if (type == "movie") {
            setGenre(28)
        }
        else if (type == "tv") {
            setGenre(10759)
        }
        setName("Action")
    }
    const handleAnim = () => {
        setGenre(16)
        setName("Animation")

    }
    const handleDrama = () => {
        setGenre(18)
        setName("Drama")

    }
    const handleComedy = () => {
        setGenre(35)
        setName("Comedy")
    }

    return (
        <div className='bg-black flex flex-col justify-center py-24'>
            <div className='flex justify-center items-center text-center flex-col gap-4'>
                <div>
                    <p className='text-yellow-300 text-xs'>ONLINE STREAMING</p>
                    <p className='font-bold text-white text-3xl'>Popular Shows and Movies</p>
                </div>
                <div className='flex gap-5 flex-wrap items-center justify-center'>
                    <p className={`text-white font-bold text-xs px-5 py-3 cursor-pointer bg-[#20212b] rounded-full border-2 ${type == "movie" && "border-yellow-300"}`} onClick={setMovie}>Movies</p>
                    <p className={`text-white font-bold text-xs px-5 py-3 cursor-pointer bg-[#20212b] rounded-full border-2 ${type == "tv" && "border-yellow-300"}`} onClick={setShow}>TV Shows</p>
                    <div className='relative'>
                        <div className='px-5 py-3 cursor-pointer bg-[#20212b] rounded-full border-2 flex items-center gap-3' onClick={() => setOpen(!open)}>
                            <p className={`text-white font-bold text-xs `}>{name}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                            <div className={`absolute bg-blue-950 px-5 py-1 top-10 left-0 ${open != true && "hidden"}`} >
                                <p className='text-white text-sm my-1' onClick={handleAction}>Action</p>
                                <p className='text-white text-sm py-1' onClick={handleAnim}>Animation</p>
                                <p className='text-white text-sm my-1' onClick={handleDrama}>Drama</p>
                                <p className='text-white text-sm my-1' onClick={handleComedy}>Comedy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center px-16 py-16 gap-10'>
                {data.map(movie => {
                    return (
                        <div className='w-fit' key={movie.id}>
                            <div>
                                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" draggable="false" className='hover:scale-105' />
                            </div>
                            <div className='flex flex-col gap-2 p-2'>
                                <div className='flex justify-between '>
                                    {type == "movie" ? (<p className='font-bold text-white'>{movie.original_title}</p>) : (<p className='font-bold text-white text-ellipsis'>{movie.name}</p>)}
                                    {type == "movie" ? (<p className='text-yellow-300 font-bold text'>{movie.release_date?.slice(0, 4)}</p>) : (<p className='text-yellow-300 font-bold text'>{movie.first_air_date?.slice(0, 4)}</p>)}

                                </div>
                                <div className='flex items-center justify-between'>
                                    <p className='px-2 border-2 border-white text-xs font-bold text-yellow-300'>HD</p>
                                    <div className='flex items-center gap-1'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-yellow-300">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                        <p className='font-bold text-xs text-[#bcbcbc]'>{movie.vote_average}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Trending