/* eslint-disable react/prop-types */
import React from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import poster from "../../assets/ucm_poster04.jpg"

// eslint-disable-next-line react/prop-types
const Card = ({ data, type }) => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      partialVisibilityGutter: 100,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };


  return (
    <div className='pl-[10px] md:pl-16 pt-10 pb-10'>
      <Carousel
        arrows={false}
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        responsive={responsive}
        arrowsremoveArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {data.map(movie => {
          return (
            <div className='w-fit' key={movie.id}>
              <div>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="" draggable="false" />
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

      </Carousel>
    </div>
  )
}

export default Card