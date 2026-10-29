import React, {useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Topnav from './template/Topnav';
import Dropdown from './template/Dropdown';
import axios from '../utils/axios'
import Cards from './template/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();
    const [category, setCategory] = useState("all");
    const [duration, setDuration] = useState("day");
    const [trending, setTrending] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)
    document.title = 'FlixVerse - Trending ' + category

    const GetTrending = async()=>{
        try{
            const {data} = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            // setTrending(data.results)
            
            
            if(data.results.length > 0){
                setTrending((prevState)=>[...prevState, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false)   // Yahan false kar dete hain taaki scroll rukh jaye
            }


        }catch(err){
            console.log('Error : ' + err);
        }
    }
    // console.log(trending);



    const refreshHandler = async () =>{
        if(trending.length === 0){
            GetTrending()
        }else{
            setPage(1);         // jab page pe category ya duration change karenge to trending me kuch pehle se hoga, tab ye else chalega aur pehle wale data ko clear karke page ko bhi 1 pe le ayega, aur shuru se GetTrending ko chala dega
            setTrending([]);
            GetTrending();
        }
    }
    


    useEffect(()=>{
        refreshHandler();
    },[category, duration]);

  return trending.length > 0  ? (      // First, when the Trending page opens, `trending.length` is empty, so the loader is returned. After that, `useEffect` runs with the initial `category` and `duration` values. The data is then loaded into `trending. The page re-renders, and now `trending.length` has data, so the loader disappears and the data is displayed.

    <div className='trending w-screen h-screen '>
        <div className='trending-head w-[90vw] mx-auto h-[10vh] flex items-center'>
            <h1 className='text-[2vw] flex gap-[1vw]'>
                <i onClick={()=> navigate(-1)} className="ri-arrow-left-line"></i>  Trending
            </h1>

            <Topnav />

            <div className='dropdown-title flex'>
                <Dropdown title='Category' options={['all', 'movie', 'tv']} func={(e)=> setCategory(e.target.value)} />
                <Dropdown title='Duration' options={['week', 'day']} func={(e)=> setDuration(e.target.value)} />
            </div>

        </div>


        <InfiniteScroll 
        dataLength={trending.length }
        next={GetTrending}
        hasMore={hasMore}
        loader={ <h1> Loading... </h1> }>
            <Cards data={trending} title={category} />
        </InfiniteScroll>
            




    </div> 

  ) : <Loader />
}

export default Trending