// import axios from '../../utils/axios'
// import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../../../public/logo.png'

// function Sidenav({isOpen, setIsOpen}) {



//   return (
//         <div className='sidenav w-[20%] h-[100vh] top-0 border-r-2 border-zinc-200 px-[2%] fixed top-0 left-0 '>
//             <div className='text-[1vw] h-[10vh] font-bold flex items-center mt-[0.5vw]'>
//                 <Link to='/'> <img src={logo} className='logo w-[8vw]' alt="" /> </Link>
//                 <span className='title text-[1.6vw] '> FlixVerse </span>
//             </div>

//             <nav className='h-[70vh] flex flex-col gap-[0.2vw] text-[1.3vw] leading-none '>
//                 <h1 className='font-semibold text-[0.6vw] my-[3vh] mb-[0.8vw] text-[1.6vw]'>New Feeds</h1>
//                 <Link to='/trending' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-fire-fill"></i> Trendings</Link>
//                 <Link to='/popular' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-tv-2-line"></i> Popular</Link>
//                 <Link to='/movie' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-slideshow-4-fill"></i> Movie</Link>
//                 <Link to='/tv' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-film-fill"></i> Tv Shows</Link>
//                 <Link to='/person' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-team-fill"></i> Peoples</Link>
//             </nav>

//             {/* <hr className='border-none h-[1px] bg-zinc-100 mt-1' /> */}

//             <nav className='flex flex-col h-[10vh] relative gap-[0.2vw] text-[1.3vw] leading-none '>
//                 <h1 className='font-semibold text-xl  text-[1.6vw] mt-[1vh]'>Website Information</h1>
//                 <Link to='/contact' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-phone-line"></i> Contact</Link>
//                 <Link to='/about' className='p-[0.5vw] hover:bg-[#6556CD] hover:duration-300 rounded-lg'> <i className="ri-info-i"></i> About</Link>
//             </nav>
//         </div>

//   ) 
// }

// export default Sidenav






import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../public/logo.png'

function Sidenav({ isOpen, setIsOpen }) {

  return (
        <div className={`sidenav md:w-[20%] h-[100vh] border-r-2 border-zinc-200 px-[3%] fixed top-0 bg-[#1F1E24] z-[9999] transition-all duration-300 ${isOpen ? 'active' : ''}`}>
            
            {/* Mobile Close Button */}
            <div className='flex justify-between items-center mt-2 md:hidden'>
                <span className='text-white font-bold text-lg'>Menu</span>
                <i 
                    onClick={() => setIsOpen(false)} 
                    className="ri-close-fill text-2xl text-white cursor-pointer"
                ></i>
            </div>

            <div className='sidenav-logo-title  class="link"text-[1vw] h-[10vh] font-bold flex items-center mt-[0.5vw]'>
                <Link to='/'> <img src={logo} className='logo w-[8vw]' alt="" /> </Link>
                <span className='title text-[1.6vw] text-white'> FlixVerse </span>
            </div>

            <nav className='feeds h-[73vh] flex flex-col gap-[0.2vw] text-[1.3vw] leading-none text-zinc-300'>
                <h1 className='font-semibold text-[1.6vw] my-[2vh] mb-[0.8vw] text-white'>New Feeds</h1>
                <Link to='/trending' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-fire-fill"></i> Trendings</Link>
                <Link to='/popular' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-tv-2-line"></i> Popular</Link>
                <Link to='/movie' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-slideshow-4-fill"></i> Movie</Link>
                <Link to='/tv' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-film-fill"></i> Tv Shows</Link>
                <Link to='/person' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-team-fill"></i> Peoples</Link>
            </nav>

            <nav className='web-info flex flex-col h-[10vh] relative gap-[0.2vw] text-[1.3vw] leading-none text-zinc-300'>
                <h1 className='font-semibold text-[1.4vw] mt-[1vh] text-white'>Website Information</h1>
                <Link to='/contact' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-phone-line"></i> Contact</Link>
                <Link to='/about' className='link p-[0.5vw] hover:bg-[#6556CD] hover:text-white hover:duration-300 rounded-lg'> <i className="ri-info-i"></i> About</Link>
            </nav>
        </div>
  ) 
}

export default Sidenav