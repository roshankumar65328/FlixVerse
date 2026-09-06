import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadperson, removeperson } from '../../store/actions/personAction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './HorizontalCards';
import Dropdown from './Dropdown';

function PersonDetails() {
  const {pathname } = useLocation();
    const Navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();
    const {info} = useSelector(state=> state.person)
    // console.log(info);
    const [category, setCategory] = useState('movie')
    
  
    
    useEffect(()=>{
        dispatch(asyncloadperson(id));
        return ()=>{    // this will run after this particuler page leave
          dispatch(removeperson());    
        }
    },[id], [pathname])

  return info ? 
    <div className='w-full px-[5%] flex flex-col pb-[2vw]'>
      {/* navigation bar */}
      <nav className='w-full h-[10vh] text-[1.5vw] flex items-center gap-[3vw]'>
        <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line"></i>
        <a target="_blank" href={info.detail.homepage} > <i className="hover:text-[#6556CD] ri-external-link-line"></i> </a>
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}> imdb </a>
      </nav>

      <div className='w-full flex '>
        {/* part-1 - left person details */}
        <div className='w-[14%] '>
          <img className=' w-fit mb-[0.6vw] mt-[0.5vw] shadow-[6px_14px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/w500${
              info.detail.profile_path
                }`} 
                alt="" 
          />

          <hr className=' mt-[0.5vw] mb-[0.5vw] bg-zinc-400 h-[1px] border-none ' />

          {/* social media links */}
          <div className='flex gap-x-[1vw]'>
            <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}  > <i className="ri-earth-fill text-[2.2vw]"></i> </a>
            <a target="_blank" href={`https://www.facebook.com/${info.externalid.facebook_id}`}  > <i className="ri-facebook-box-fill text-[2.2vw]"></i> </a>
            <a target="_blank" href={`https://www.instagram.com/${info.externalid.instagram_id}`}  > <i className="ri-instagram-fill text-[2.2vw]"></i> </a>
            <a target="_blank" href={`https://www.x.com/${info.externalid.instagram_id}`}  > <i className="ri-twitter-x-line text-[2.2vw]"></i> </a>
          </div>

          {/* personal info */}
          <h1 className='text-[1.5vw] text-zinc-400 font-black'>Personal Info</h1>
          <h1 className='text-[1.4vw] text-zinc-100 mt-[0.6vw]'>Known for</h1>
          <h1 className='text-[1.3vw] text-zinc-500 font-semibold'>{ info.detail.known_for_department}</h1>

          <h1 className='text-[1.4vw] text-zinc-100 mt-[0.6vw]'>Gender</h1>
          <h1 className='text-[1.3vw] text-zinc-500 font-semibold'>{ info.detail.gender === 1 ? "Female" : "Male"}</h1>

          <h1 className='text-[1.4vw] text-zinc-100 mt-[0.6vw]'>Birthday</h1>
          <h1 className='text-[1.3vw] text-zinc-500 font-semibold'>{ info.detail.birthday }</h1>

          <h1 className='text-[1.4vw] text-zinc-100 mt-[0.6vw]'>Place of Birth</h1>
          <h1 className='text-[1.3vw] text-zinc-500 font-semibold'>{ info.detail.place_of_birth }</h1>

          <h1 className='text-[1.4vw] text-zinc-100 mt-[0.6vw]'>Also known as</h1>
          <h1 className='text-[1.3vw] text-zinc-500 font-semibold'>{ info.detail.also_known_as }</h1>
        </div>

        {/* part-2 - right info */}
        <div className='w-[86%] pl-[5%] '>
          <h1 className='text-[3.5vw] text-zinc-400 font-black'>{info.detail.name}</h1>

          <h1 className='text-[2vw] text-zinc-400 mt-[0.6vw] font-semibold'>Biography</h1>
          <h1 className='text-[1.3vw] text-zinc-500 font-semibold mt-[0.3vw]'>{ info.detail.biography}</h1>

          <h1 className='text-[1.5vw] text-zinc-400 mt-[3vw] mb-[1vw] font-semibold'>Worked for</h1>
          <div className='w-[85vw]'>
            <HorizontalCards data={info.combinedCredits.cast} />
          </div>

          <div className='w-full flex justify-between mt-[3vw] mb-[2vw]'>
            <h1 className='mt-[0.5vw] text-[1.2vw] text-zinc-400 font-semibold'>Acting</h1>
            <Dropdown title='category' options={['tv', 'movie']} func={(e)=>{setCategory(e.target.value)}} />
          </div>

          <div className='list-disc w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-xl shadow-[rgba(255,255,255,0.2)] border-1 border-zinc-300'>
            {info[category + "Credits"].cast.map((c,i)=>(
            <li className='hover:text-white px-[2.5vw] py-[1.4vw] duration-300 cursor-pointer' key={i}> 
              <Link to={`/${category}/details/${c.id}`} className='flex flex-col'>
                <span> {c.name || c.original_name || c.original_title}</span>
                <span>{c.character &&  `character.name: ${c.character}`}</span>
              </Link> 
            </li>
            ))}
          </div>
        </div>

      </div>



    </div> : <Loader />
  
} 

export default PersonDetails