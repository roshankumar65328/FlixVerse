import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Loader from './components/Loader'
import Trending from './components/Trending'
import Popular from './components/Popular'
import Movie from './components/Movie'
import Tvshows from './components/Tvshows'
import People from './components/People'
import MovieDetails from './components/template/MovieDetails'
import TvDetails from './components/template/TvDetails'
import PersonDetails from './components/template/PersonDetails'
import Trailer from './components/template/Trailer'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className='w-full  bg-[#1F1E21] box-border text-white overflow-x-hidden '>
      



    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/trending' element={<Trending />} />
      <Route path='/popular' element={<Popular />} />

      <Route path='/movie' element={<Movie />} />
      <Route path='/movie/details/:id' element={<MovieDetails />}> 
        <Route path="/movie/details/:id/trailer" element={<Trailer />} ></Route>
      </Route>

      <Route path='/tv' element={<Tvshows />} />
      <Route path='/tv/details/:id' element={<TvDetails />}>
        <Route path='/tv/details/:id/trailer' element={<Trailer />}></Route>
      </Route> 
      
      <Route path='/person' element={<People />} />
      <Route path='/person/details/:id' element={<PersonDetails />} />

      <Route path='/about' element={<About />}  />
      <Route path='/contact' element={<Contact />} />

    </Routes> 


    </div>
  )
}

export default App