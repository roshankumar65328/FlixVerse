import React from 'react'
import loader from '../../public/loader.gif'

function Loader() {
  return (
    <div >
        <img className='w-full h-screen flex justify-center items-center' src={loader} alt="" />
    </div>
  )
}

export default Loader