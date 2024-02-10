import React from 'react'

import useVideoTrailer from '../hooks/useVideoTrailer';

const VideoBackground = ({movieID}) => {
   
   const trailerKey=useVideoTrailer(movieID);
  return (
    <div className='w-screen aspect-[2/1] z-12'> 
        <iframe 
        className='w-screen aspect-[2/1] z-12'
        src={"https://www.youtube.com/embed/" + trailerKey +"?rel=0&autoplay=1&controls=0&showinfo=0&loop=1&mute=1&playlist="+trailerKey} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen>

        </iframe>
    </div>
  )
}

export default VideoBackground