import React from 'react'
import { Link } from 'react-router-dom'

function Cards({data, title}) {
    // console.log(data);
    // console.log(title);
    
    
  return (
    <div className='w-[100vw] justify-center flex flex-wrap gap-[2%] mt-[1vw] bg-[#1F1E24]'>
        {data.map((c,i)=>{
            return <Link to={`/${c.media_type || title}/details/${c.id}`} className='relative w-[24vh] mb-[2%] ' key={i} > 
                        <img className='h-[40vh] w-fit mb-[0.8vw] shadow-[6px_14px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/w500${
                             c.poster_path || c.backdrop_path || c.profile_path
                            }`} 
                            alt="" 
                        />

                        <h1 className='text-[1.5vw] text-zinc-400'>
                        {c.name || c.title || c.original || c.original_title} 
                        </h1>

                        {c.vote_average && <div className='text-black text-sm w-[5vh] h-[5vh] flex items-center justify-center rounded-full bg-yellow-300 font-bold absolute  top-[35vh] right-[0%]'>{(c.vote_average ).toFixed(1)}  </div>}

                    </Link>
        })}
    </div>
  )
}

export default Cards 
