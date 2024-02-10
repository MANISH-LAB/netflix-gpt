import React from 'react'
import {useSelector} from "react-redux"
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const MainContainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies)
    if(movies===null || movies===undefined) return;
    const mainMovie=movies.results[0]
    console.log(mainMovie)
    const {original_title, overview,id}= mainMovie;
    console.log(id);
  return (
    <div className=''>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer

