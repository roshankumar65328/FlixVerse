import React from 'react'
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import noimage from '../../../public/noImage.png'


function HorizontalCards({data}) {
  // console.log(data);
  
  return (



      <div className='w-[100%] gap-[0.8vw] flex overflow-x-auto bg-[#1F1E24]' >
        {data.length > 0 ? data.map((d,i)=>{
          return <Link to={`/${d.media_type}/details/${d.id}`}  key={i} className='min-w-[20%]  h-[52vh] px-[1vw] py-[1vw]  bg-zinc-800'>
                    <img className='w-full h-[45%] object-cover object-[0%_10%]' key={i} src={ d.backdrop_path || d.poster_path ? `http://image.tmdb.org/t/p/original/${d.backdrop_path || d.poster_path}` : noimage } alt="" />
                    <h1 className='text-[1.4vw] font-semibold pl-[0.4vw] py-[0.8vw] leading-none'>{d.title || d.name || d.original_name || d.original_title}</h1>
                    <p className='text-[0.8vw] pl-[0.4vw]  w-[100%] text-[1vw] leading-[1.2vw]'>{d.overview.slice(0,175)}...<span className='text-zinc-500'>more</span></p>
                 </Link>
        }) : <h1 className='text-[3vw] mt-[4%] text-center'>Nothing to load</h1>}
      </div>
  )
}

export default HorizontalCards