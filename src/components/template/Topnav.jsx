import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import noImage from '../../../public/noImage.png'

function Topnav() {
    const [query,setQuery] = useState("");
    const [searches, setSearches] = useState([]);

    {query &&  console.log(query); }



    const GetSearches = async ()=>{
        try{
            const {data} = await axios.get(`/search/multi?query=${query}`)
            // console.log(data);
            setSearches(data.results);
        //    {searches &&  console.log(searches); }
            
        }catch(err){
            console.log(err);
        }
    };
    

    useEffect(()=>{
        GetSearches();
    },[query])
    

  return (
    <div className='topnav w-[75vw] h-[8vh] relative flex items-center justify-start pl-[20%]'>
        <i className="search text-zinc-400 text-2xl ri-search-line"></i>
        <input 
        onChange={(e)=>{setQuery(e.target.value)}}
        value={query}
         className='border rounded w-[50%] mx-[1%]  text-[1.6vw]  border-none' type="text" placeholder='search any movie, series, actors...' />
        
        {query.length > 0 && 
        <i 
            onClick={()=>setQuery("")}  className="text-zinc-400 text-3xl ri-close-line"
        ></i>}

        <div className='search-result absolute z-[999] w-[50%] max-h-[50vh] bg-zinc-200  top-[100%] overflow-auto rounded'>

            {searches && searches.map((s, i)=>{
            return <Link to={`/${s.media_type}/details/${s.id}`} key={i} className='text-zinc-600 bg-blue-200 w-full i p-[0.8vw] hover:text-black hover:bg-blue-300 duration-500 border-b-2 border-zinc-100 items-center flex items-center gap-x-[5vw]'>
                <img className='w-[10vh] h-[10vh] object-cover rounded'  
                src={
                    s.backdrop_path || s.profile_path || s.poster_path ?
                    `https://image.tmdb.org/t/p/w500/${s.backdrop_path || s.profile_path || s.poster_path }` : noImage  } 
                alt="" />
                <span className='text-[1.2vw]'> {s.name || s.title || s.original_name || original_title} </span>
            </Link>

            })}
            {/* <Link className='text-zinc-600 bg-blue-200 w-full inline-block p-[2vw] hover:text-black duration-500 border-b-2 border-zinc-100 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello Everyone </span>
            </Link>
            <Link className='text-zinc-600 bg-blue-200 w-full inline-block p-[2vw] hover:text-black duration-500 border-b-2 border-zinc-100 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello Everyone </span>
            </Link>
            <Link className='text-zinc-600 bg-blue-200 w-full inline-block p-[2vw] hover:text-black duration-500 border-b-2 border-zinc-100 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello Everyone </span>
            </Link>
            <Link className='text-zinc-600 bg-blue-200 w-full inline-block p-[2vw] hover:text-black duration-500 border-b-2 border-zinc-100 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello Everyone </span>
            </Link>
            <Link className='text-zinc-600 bg-blue-200 w-full inline-block p-[2vw] hover:text-black duration-500 border-b-2 border-zinc-100 flex justify-start items-center'>
                <img src="" alt="" />
                <span>Hello Everyone </span>
            </Link> */}
           


        </div>

    </div>
  )
}

export default Topnav