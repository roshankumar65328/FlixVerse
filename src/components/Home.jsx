// import React, { useEffect, useState } from 'react'
// import Sidenav from './template/Sidenav'
// import Topnav from './template/Topnav'
// import axios from '../utils/axios';
// import Header from '../components/template/Header'
// import HorizontalCards from './template/HorizontalCards';
// import Dropdown from './template/Dropdown';
// import Loader from './Loader';
// import logo from '../../public/logo.png'

// function Home() {
//     document.title = "FlixVerse - Web App"

//     const [wallpaper, setWallpaper] = useState(null);
//     const [trending, setTrending] = useState(null);
//     const [category, setCategory] = useState("all")

//     const GetHeaderWallpaper = async()=>{
//         try{
//             const {data} = await axios.get(`/trending/all/day`)
//             let randomData = data.results[(Math.random() * data.results.length).toFixed()];
//             // let randomData = data.results[Math.ceil(Math.random() * data.results.length)];    // both line are same

//             setWallpaper(randomData);
//         }catch(err){
//             console.log("error: ", err);
            
//         }
//     }
//     // console.log(wallpaper);


//     const GetTrending = async()=>{
//         try{
//             const {data} = await axios.get(`/trending/${category}/day`);
//             setTrending(data.results)
//         }catch(err){
//             console.log(err);
            
//         }
//     }
//     // console.log(trending);
    
    


//     useEffect(()=>{
//         GetTrending();
//         !wallpaper && GetHeaderWallpaper();
//     },[category]);


//   return wallpaper && trending ? (
//     <div className='w-[100%]  flex '>
//         <Sidenav />
//         <div className='right w-[79%] ml-[20vw] '>
//             <div className='flex items-center'>
//                 <i className="menu ri-menu-line ml-[2vw] hidden"></i>
//                 <img className='name hidden' src={logo} alt="" />
//                 <Topnav />
//             </div>
//             <Header data={wallpaper}/>

//             <div className='flex justify-between'> 
//                 <h1 className='trending-title text-[1.7vw] px-[1vw] py-[0.5vw] font-semibold'>Trending</h1>
//                 <div className='dropdown-title relative mt-[0.5vw]'>
//                     <Dropdown title='Filter' options={['tv', 'movie', 'all']} func={(e)=> setCategory(e.target.value)} />
//                 </div>
//             </div>

//             <HorizontalCards  data={trending} setCatFunc={setCategory} />
//         </div>
//     </div>
//   ) : ( <Loader /> )
// }

// export default Home










import React, { useEffect, useState } from 'react'
import Sidenav from './template/Sidenav'
import Topnav from './template/Topnav'
import axios from '../utils/axios';
import Header from '../components/template/Header'
import HorizontalCards from './template/HorizontalCards';
import Dropdown from './template/Dropdown';
import Loader from './Loader';
import logo from '../../public/logo.png'

function Home() {
    document.title = "FlixVerse - Web App"

    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all");
    
    // 1. Sidebar Toggle State
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const GetHeaderWallpaper = async()=>{
        try{
            const {data} = await axios.get(`/trending/all/day`)
            let randomData = data.results[(Math.random() * data.results.length).toFixed()];
            setWallpaper(randomData);
        }catch(err){
            console.log("error: ", err);
        }
    }

    const GetTrending = async()=>{
        try{
            const {data} = await axios.get(`/trending/${category}/day`);
            setTrending(data.results)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        GetTrending();
        !wallpaper && GetHeaderWallpaper();
    },[category]);

  return wallpaper && trending ? (
    <div className='home w-[100%] flex relative overflow-x-hidden'>
        
        {/* 2. props paaded to Sidenav */}
        <Sidenav isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Mobile Background Overlay (when sidebar open ) */}
        {isSidebarOpen && (
            <div 
                onClick={() => setIsSidebarOpen(false)} 
                className="fixed inset-0 bg-black/60 z-[998] md:hidden"
            ></div>
        )}

        <div className='right w-full md:w-[80%] md:ml-[20%]'>
            <div className='flex items-center px-2'>
                
                {/* 3. Menu Icon Par Click Handler Lagayein */}
                <i 
                    onClick={() => setIsSidebarOpen(true)} 
                    className="menu hidden ri-menu-line ml-[2vw] text-2xl cursor-pointer"
                ></i>
                
                <img className='name hidden' src={logo} alt="" />
                <Topnav />
            </div>
            <Header data={wallpaper}/>

            <div className='flex justify-between'> 
                <h1 className='trending-title text-[1.7vw] px-[1vw] py-[0.5vw] font-semibold'>Trending</h1>
                <div className='dropdown-title relative mt-[0.5vw]'>
                    <Dropdown title='Filter' options={['tv', 'movie', 'all']} func={(e)=> setCategory(e.target.value)} />
                </div>
            </div>

            <HorizontalCards data={trending} setCatFunc={setCategory} />
        </div>
    </div>
  ) : ( <Loader /> )
}

export default Home