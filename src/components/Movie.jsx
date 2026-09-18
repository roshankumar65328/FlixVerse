import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loader from './Loader';
import Dropdown from './template/Dropdown';
import Topnav from './template/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './template/Cards';

function Movie() {
    document.title = 'FlixVerse - movies'
    const Navigate = useNavigate();
    const [category, setCategory] = useState("now_playing");
    const [movie, setMovie] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);




 
    const GetMovie = async()=>{
        try{
            const {data} = await axios.get(`/movie/${category}?page=${page}`);
            // setMovie(data.results)
            
            
            if(data.results.length > 0){
                setMovie((prevState)=>[...prevState, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false)
            }


        }catch(err){
            console.log('Error : ' + err);
        }
    }
    // console.log(movie);



    const refreshHandler = async () =>{
        if(movie.length === 0){
            GetMovie()
        }else{
            setPage(1);
            setMovie([]);
            GetMovie();
        }
    }
    


    useEffect(()=>{
        refreshHandler();
    },[category]);





  return movie.length > 0  ? (
    <div className='movie w-screen h-screen '>
        <div className='nav w-[100vw] h-[10vh] flex items-center'>
            <h1 className='movie-title w-[15vw] text-[2vw] flex gap-[1vw] px-[5%]'>
                <i onClick={()=> Navigate(-1)} className="search-icon ri-arrow-left-line"></i>  Movies
            </h1>

            <Topnav />

            <div className='dropdown-title relative '>
                <Dropdown title='Category' options={['popular', 'top_rated', 'upcoming', 'now_playing']} func={(e)=> setCategory(e.target.value)} />
            </div>

        </div>


        <InfiniteScroll 
        dataLength={movie.length }
        next={GetMovie}
        hasMore={hasMore}
        loader={ <h1> Loading... </h1> }>
            <Cards data={movie} title="movie" />
        </InfiniteScroll>
            




    </div> 

  ) : <Loader />
}

export default Movie