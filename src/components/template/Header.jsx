import React from 'react'
import { Link } from 'react-router-dom';

function Header({data}) {
  // console.log(data);
  
  return data ? (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(0,0,0,0.8)) , url(https://image.tmdb.org/t/p/w500${
        data.backdrop_path
      }) `,
      backgroundPosition: "center 10%",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat'
    }} 
    className='w-full h-[50vh] flex flex-col justify-end px-[2vw] pb-[1vw] '>
      <h1 className='text-[2.5vw] font-bold  '>{data.name || data.title || data.original_name || data.original_title}</h1>
      <p className='w-[70%] text-[1vw]'>{data.overview.slice(0,200)}...<Link to={`/${data.media_type}/details/${data.id}`} className='text-blue-300'>more</Link></p>
      <p className='flex gap-x-[1.1vw] mt-[0.2vw]'>
        <i className="text-[1.2vw] text-yellow-500 ri-megaphone-line"> {data.release_date  || "date not available"}</i>
        <i className="text-[1.2vw] text-yellow-500 ri-calendar-schedule-line"> {data.media_type.toUpperCase()}</i>
      </p>
      <Link to={`/${data.media_type}/details/${data.id}/trailer`} className=' text-[1vw] bg-[#6556CD] w-fit px-[0.6vw] py-[0.35vw] rounded-full'>Watch Trailer</Link>
    </div>
  ) : <div>Loading</div>
}

export default Header 