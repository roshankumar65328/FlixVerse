import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import Loader from './Loader';
import Dropdown from './template/Dropdown';
import Topnav from './template/Topnav';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cards from './template/Cards';

function People() {
    document.title = 'FlixVerse - Person '
    const Navigate = useNavigate();
    const [category, setCategory] = useState("popular");
    const [person, setPerson] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true)




 
    const GetPerson = async()=>{
        try{
            const {data} = await axios.get(`/person/${category}?page=${page}`);
            // setPerson(data.results)
            
            
            if(data.results.length > 0){
                setPerson((prevState)=>[...prevState, ...data.results])
                setPage(page + 1);
            }else{
                setHasMore(false)
            }


        }catch(err){
            console.log('Error : ' + err);
        }
    }
    // console.log(person);



    const refreshHandler = async () =>{
        if(person.length === 0){
            GetPerson()
        }else{
            setPage(1);
            setPerson([]);
            GetPerson();
        }
    }
    


    useEffect(()=>{
        refreshHandler();
    },[category]);


  return person.length > 0  ? (
    <div className='w-screen h-screen '>
        <div className='w-[90vw] mx-auto h-[10vh] flex items-center'>
            <h1 className='text-[2vw] flex gap-[1vw]'>
                <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line"></i>  Peoples
            </h1>

            <Topnav />

            {/* <Dropdown title='Category' options={['on_the_air', 'popular', 'top_rated', 'airing_today']} func={(e)=> setCategory(e.target.value)} /> */}

        </div>


        <InfiniteScroll 
        dataLength={person.length }
        next={GetPerson}
        hasMore={hasMore}
        loader={ <h1> Loading... </h1> }>
            <Cards data={person} title="person" />
        </InfiniteScroll>
            




    </div> 

  ) : <Loader />
}

export default People