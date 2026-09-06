import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loader from './Loader';
import Dropdown from './template/Dropdown';
import Topnav from './template/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './template/Cards';

function Tvshows() {
    document.title = 'FlixVerse - Tv Shows'
    const Navigate = useNavigate();
    const [category, setCategory] = useState("airing_today");
    const [tv, setTv] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)




 
    const GetTv = async()=>{
        try{
            const {data} = await axios.get(`/tv/${category}?page=${page}`);
            // setTv(data.results)
            
            
            if(data.results.length > 0){
                setTv((prevState)=>[...prevState, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false)
            }


        }catch(err){
            console.log('Error : ' + err);
        }
    }
    // console.log(tv);



    const refreshHandler = async () =>{
        if(tv.length === 0){
            GetTv()
        }else{
            setPage(1);
            setTv([]);
            GetTv();
        }
    }
    


    useEffect(()=>{
        refreshHandler();
    },[category]);


  return tv.length > 0  ? (
    <div className='w-screen h-screen '>
        <div className='w-[100vw] h-[10vh] flex items-center'>
            <h1 className='w-[20vw] text-[2vw] flex gap-[1vw] px-[5%]'>
                <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line"></i>  Tv
            </h1>

            <div className='w-{60%}'>
                <Topnav />
            </div>

            <div className='w-[20vw]'>
                <Dropdown title='Category' options={['on_the_air', 'popular', 'top_rated', 'airing_today']} func={(e)=> setCategory(e.target.value)} />
            </div>

        </div>


        <InfiniteScroll 
        dataLength={tv.length }
        next={GetTv}
        hasMore={hasMore}
        loader={ <h1> Loading... </h1> }>
            <Cards data={tv} title="tv" />
        </InfiniteScroll>
            




    </div> 

  ) : <Loader />
}

export default Tvshows