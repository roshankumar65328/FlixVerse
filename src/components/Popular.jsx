import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loader from './Loader';
import Dropdown from './template/Dropdown';
import Topnav from './template/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './template/Cards';

function Popular() {
    document.title = 'FlixVerse - Trending popular'
    const Navigate = useNavigate();
    const [category, setCategory] = useState("movie");
    const [popular, setPopular] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)




 
    const GetPopular = async()=>{
        try{
            const {data} = await axios.get(`/${category}/popular?page=${page}`);
            // setPopular(data.results)
            
            
            if(data.results.length > 0){
                setPopular((prevState)=>[...prevState, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false)
            }


        }catch(err){
            console.log('Error : ' + err);
        }
    }
    // console.log(popular);



    const refreshHandler = async () =>{
        if(popular.length === 0){
            GetPopular()
        }else{
            setPage(1);
            setPopular([]);
            GetPopular();
        }
    }
    


    useEffect(()=>{
        refreshHandler();
    },[category]);


  return popular.length > 0  ? (
    <div className='w-screen h-screen '>
        <div className='w-[90vw] mx-auto h-[10vh] flex items-center'>
            <h1 className='text-[2vw] flex gap-[1vw]'>
                <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line"></i>  Popular
            </h1>

            <Topnav />

            <Dropdown title='Category' options={['movie', 'tv']} func={(e)=> setCategory(e.target.value)} />

        </div>


        <InfiniteScroll 
        dataLength={popular.length }
        next={GetPopular}
        hasMore={hasMore}
        loader={ <h1> Loading... </h1> }>
            <Cards data={popular} title={category} />
        </InfiniteScroll>
            




    </div> 

  ) : <Loader />
}

export default Popular