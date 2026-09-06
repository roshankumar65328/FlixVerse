import React from 'react'
import notfound from '../../public/404.gif'
import { useNavigate } from 'react-router-dom'

function NotFound() {
  const Navigate = useNavigate();
  return (
    <div >
        <i onClick={()=> Navigate(-1)} className="ri-close-large-line absolute z-2000 top-5 right-10 text-[2vw] font-bold"></i>
        <img className='w-full h-screen flex justify-center items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[rgba(0,0,0,0.9)] fixed' src={notfound} alt="" />
    </div>
  )
}

export default NotFound