import React from 'react'
import "../index.css"

function Spinner() {
  return (
    <div className='flex flex-col justify-center items-center h-[70vh]'>
    <div className='spinner'></div>
    <p>Loading...</p>
    </div>

  )
}

export default Spinner