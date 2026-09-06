import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { asyncloadtv, removetv } from '../../store/actions/tvAction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './HorizontalCards';

function MovieDetails() {
  const {pathname } = useLocation();
  const Navigate = useNavigate();
  const {id} = useParams();
  const dispatch = useDispatch();
  const {info} = useSelector(state=> state.tv)
  // console.log(info);
  

  
  useEffect(()=>{
      dispatch(asyncloadtv(id));
      return ()=>{    // this will run after this particuler page leave
        dispatch(removetv());    
      }
  },[id], pathname)

  return info ? (
    <div style={{
      background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5), rgba(0,0,0,0.8)) , url(https://image.tmdb.org/t/p/w500${
        info.detail.backdrop_path
      }) `,
      backgroundPosition: "top 10%",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: 'no-repeat'
    }}  
    className='w-screen h-[100vh] px-[5%] overflow-auto relative pb-[1vw]'>

      {/* part-1 - navigation */}
      <nav className='w-full h-[10vh] text-[1.5vw] flex items-center gap-[3vw]'>
        <i onClick={()=> Navigate(-1)} className="ri-arrow-left-line"></i>
        <a target="_blank" href={info.detail.homepage} > <i className="hover:text-[#6556CD] ri-external-link-line"></i> </a>
        {/* <a target="_blank" href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}  > <i className="ri-earth-fill"></i> </a> */}
        <a target="_blank" href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}> imdb </a>
      </nav>

      <div className='flex w-full '>
        {/* part-2 - poster and available on platform*/}
        <div className='w-[25vw]  h-fit'>
          <div>
            <img className='h-[50vh] w-fit mb-[0.6vw] mt-[2vw] shadow-[6px_14px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/w500${
              info.detail.poster_path || info.detail.backdrop_path
                }`} 
                alt="" 
            />

            <div className='w-full  mt-[2vw]'>
              <div className='mt-[1vw]'>
                  {info.watchproviders && info.watchproviders.flatrate &&
                    (
                      <div className='flex gap-[1vw] items-center'>
                        <h1 className='font-bold text-[1.2vw]'>flatrate</h1>
                        {info.watchproviders.flatrate.map((w,i)=>(
                          <img key={i} title={w.provider_name} className='w-[5vh] rounded-sm' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                      </div>
                    )
                  }
              </div>

              <div className='mt-[1vw]'>
                  {info.watchproviders && info.watchproviders.rent &&
                    (
                      <div className='flex gap-[1vw] items-center'>
                        <h1 className='font-bold text-[1.2vw]'>Rent</h1>
                        {info.watchproviders.rent.map((w,i)=>(
                          <img key={i} title={w.provider_name} className='w-[5vh] rounded-sm' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                      </div>
                    )
                  }
              </div>

              <div className='mt-[1vw]'>
                  {info.watchproviders && info.watchproviders.buy &&
                    (
                      <div className='flex gap-[1vw] items-center'>
                        <h1 className='font-bold text-[1.2vw]'>buy</h1>
                        {info.watchproviders.buy.map((w,i)=>(
                          <img key={i} title={w.provider_name} className='w-[5vh] rounded-sm' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt="" />
                        ))}
                      </div>
                    )
                  }
              </div>
            </div>
          </div>
        </div>

        {/* part-3 - details */}
        <div className='w-[75vw] h-fit content  '>
          <h1 className='text-[4.5vw] font-bold leading-[6vw]'> {info.detail.name || info.detail.title || info.detail.original || info.detail.original_title} 
            <small className='text-[2vw] text-zinc-300 mx-[1vw]'>({info.detail.first_air_date.split("-")[0]})</small>
          </h1>

          <div className='flex items-center gap-x-[1.2vw]'>

            <h1 className='text-[1.2vw] font-bold text-zinc-100 '>
              {info.detail.release_date}
            </h1>

            <h1 className='text-[1.2vw] font-bold text-zinc-100'>
              {info.detail.genres.map((g,i)=> g.name).join(" | ") }
            </h1>

            <h1 className='text-[1.2vw] font-bold text-zinc-100'> 
              {info.detail.number_of_seasons} seasons
            </h1>
            <h1 className='text-[1.2vw] font-bold text-zinc-100'> 
              {info.detail.number_of_episodes} episodes
            </h1>

            <h1 className='text-[1.2vw] font-bold text-zinc-100 '>
              {info.detail.tagline}
            </h1>

            <h1>
              {info.detail.vote_average && <div className=' text-black text-[1vw] w-[14vh] h-[5.5vh] flex items-center justify-center rounded-full bg-yellow-300 hover:bg-[#6556CD] font-black  '>  {`Rating ` +(info.detail.vote_average ).toFixed(1)}  </div>}
            </h1>
          </div>

          <div className='mt-[1vw]'>
            <h1 className='text-[2vw] font-semibold '>Overview</h1>
            <p className='text-[1.2vw] leading-[1.3]'>
              {info.detail.overview}
            </p>
          </div>

          <div className='mt-[1vw] '>
            <h1 className='text-[2vw] font-semibold '>Translations</h1>
            <p className='text-[1vw] leading-[1.3]'>
              {info.translations.join(",")}
            </p>
          </div>

          { <Link to={`${pathname}/trailer`} className='text-[1.2vw] bg-[#6556CD] px-[1.5vw] py-[0.7vw] rounded-full relative top-[2vw] '> <i className="ri-play-fill"></i> Play Trailer</Link>}

        </div>
      </div>

      {/* part-4 - seasons  */}
      <div className=''>
        <h1 className='text-[2vw] px-[1vw] mt-[4vw] mb-[1vw]'>Seasons</h1>
        <div className='w-[100%] gap-[0.8vw] flex overflow-x-auto bg-[#1F1E24] overflow-y-hidden'>
          {info.detail.seasons.length >0  ? info.detail.seasons.slice(1,).map((s,i)=>(
            <div className='min-w-[20%]  h-[52vh] px-[1vw] py-[1vw]  bg-zinc-800'>
              <img className='h-[40vh] min-w-[16vw] mb-[0.8vw]' src={`https://image.tmdb.org/t/p/w500${
                info.detail.poster_path
              }`} 
              alt="" 
              />

              <h1 className='text-[1.5vw] text-zinc-400'>{s.name}</h1>
            </div>
          )) : <div className='text-[2vw] mt-[1vw] text-center'> Seasons are not available</div>}
        </div>
      </div>

      {/* part-5 - recommendation and similarity */}
      <h1 className='text-[2vw] px-[1vw] mt-[4vw] mb-[1vw]'>Recommendations</h1>
      <HorizontalCards data={info.recommendations ? info.recommendations.results : info.similar.results} />
      <Outlet />   {/* trailer ko chalane ke liye Outlet likha hai*/}

    </div>
  ) : <Loader />
}

export default MovieDetails