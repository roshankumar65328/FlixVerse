import React, { useEffect, useState } from 'react'
import Sidenav from './template/Sidenav'
import Topnav from './template/Topnav'
import axios from '../utils/axios';
import Header from '../components/template/Header'
import HorizontalCards from './template/HorizontalCards';
import Dropdown from './template/Dropdown';
import Loader from './Loader';

function Home() {
    document.title = "FlixVerse - Web App"

    const [wallpaper, setWallpaper] = useState(null);
    const [trending, setTrending] = useState(null);
    const [category, setCategory] = useState("all")

    const GetHeaderWallpaper = async()=>{
        try{
            const {data} = await axios.get(`/trending/all/day`)
            let randomData = data.results[(Math.random() * data.results.length).toFixed()];
            // let randomData = data.results[Math.ceil(Math.random() * data.results.length)];    // both line are same

            setWallpaper(randomData);
        }catch(err){
            console.log("error: ", err);
            
        }
    }
    // console.log(wallpaper);


    const GetTrending = async()=>{
        try{
            const {data} = await axios.get(`/trending/${category}/day`);
            setTrending(data.results)
        }catch(err){
            console.log(err);
            
        }
    }
    // console.log(trending);
    
    


    useEffect(()=>{
        GetTrending();
        !wallpaper && GetHeaderWallpaper();
    },[category]);


  return wallpaper && trending ? (
    <div className='w-[100%]  flex '>
        <Sidenav />
        <div className='w-[79%] ml-[20vw] '>
            <Topnav />
            <Header data={wallpaper}/>

            <div className='flex justify-between'> 
                <h1 className='text-[1.7vw] px-[1vw] py-[0.5vw] font-semibold'>Trending</h1>
                <div className='relative mt-[0.5vw]'>
                    <Dropdown title='Filter' options={['tv', 'movie', 'all']} func={(e)=> setCategory(e.target.value)} />
                </div>
            </div>

            <HorizontalCards  data={trending} setCatFunc={setCategory} />
        </div>
    </div>
  ) : ( <Loader /> )
}

export default Home
