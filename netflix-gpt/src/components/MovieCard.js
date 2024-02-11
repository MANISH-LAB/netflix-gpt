import React from 'react'
import { CDN_LINK } from '../utils/constants'
const MovieCard = ({movie}) => {
    const {title,poster_path}=movie
    
  return (
    <div className='w-52 pr-4 relative hover:w-60 hover:-mt-8 flex-shrink-0 text-white'>
        {/* <h4>{title}</h4> */}
        <img alt={title} class="cursor-pointer " src={CDN_LINK+poster_path} />

    </div>
  )
}

export default MovieCard