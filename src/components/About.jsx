import React from 'react'
import logo from '../../public/logo.png'
import { Link, useNavigate } from 'react-router-dom'

function About() {
  const Navigate = useNavigate();
  document.title = 'FlixVerse - Contact Us'
  document.title = 'FlixVerse - About Us'

  return (
    <div className='w-full h-screen bg-[#1F1E24]'>
      <div className='w-full px-[10vw] h-[10vh] bg-[#1A1E19] flex items-center justify-between '>
        <div className='flex gap-x-[1vw] items-center'>
          <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line text-[2vw] font-bold"></i>
          <h1 className='font-black text-[2vw]'>About Us</h1>
        </div>
        <Link to='/' > <img src={logo} className='w-[8vw] ' alt="" /> </Link>
      </div>


      <div
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7709189/pexels-photo-7709189.jpeg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-[90vw] h-[90vh] mx-auto "
      >

        <div className='absolute w-[90vw] h-[90vh] mx-auto t-[10vh] bg-black/70 '></div>
        
        <div className='z-100 relative w-[70vw] mx-auto px-[2vw]'>
          <h1 className='text-[1.4vw] font-semibold  pt-[3vw] text-zinc-200'>FlixVerse is a modern entertainment platform designed for movie and TV series lovers. Discover detailed information about the latest and most popular movies, web series, TV shows, trailers, and actors from around the world. Explore cast details, release information, genres, ratings, and exciting trailers all in one place. Whether you are looking for something new to watch or want to learn more about your favorite movie or actor, FlixVerse makes discovering entertainment simple, engaging, and enjoyable. Our goal is to create a smooth and visually appealing experience for every entertainment enthusiast. </h1>
          
          <div className='h-[40vh] pt-[3vw] flex flex-col text-[1.5vw]'>
            <h1 className='text-[2vw] font-bold'>Our Platform Proivides</h1>
            <p className='text-[1.3vw] text-zinc-300 pt-[1vw]'>Hollywood / Bollywood / South / Korean / etc</p>
            <p className='text-[1.3vw] text-zinc-300'>Movie Information</p>
            <p className='text-[1.3vw] text-zinc-300'>Series Information</p>
            <p className='text-[1.3vw] text-zinc-300'>What's Going Trending</p>
            <p className='text-[1.3vw] text-zinc-300'>What's Got Popular</p>
            <p className='text-[1.3vw] text-zinc-300'>Actors Movie/Series Information</p>
          </div>

        </div>


      </div>
    </div>
  )
}

export default About