import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import NotFound from '../NotFound';

function Trailer() {
    const {pathname} = useLocation();
    const category = pathname.includes("movie") ? "movie" : "tv"
    const ytvideo = useSelector(state => state[category].info.videos)
    // console.log(pathname, ytvideo);
    const Navigate = useNavigate();
    

  return ytvideo ? (
    <div className='trailer-page absolute z-1000 w-full h-screen overflow-y-hidden bg-[rgba(0,0,0,0.9)] flex items-center justify-center translate-x-[-50%] left-[50%] translate-y-[50%] top-[-50%] fixed'>
        <i onClick={()=> Navigate(-1)} className="ri-close-large-line absolute z-2000 top-5 right-10 text-[2vw] font-bold"></i>
        <ReactPlayer playing controls={false}  src={`https://www.youtube.com/watch?v=${ytvideo.key}`} style={{width: "100%", height: "100%", aspectRatio: "16/9",}}  />
    </div>
  ) : <NotFound />
}

export default Trailer 