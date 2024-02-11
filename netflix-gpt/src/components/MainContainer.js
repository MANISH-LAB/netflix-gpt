import React from 'react'
import {useSelector} from "react-redux"
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
const MainContainer = () => {
    const movies=useSelector((store)=>store.movie?.nowPlayingMovies)
    if(movies===null || movies===undefined) return;
    // const rn = Math.floor(Math.random() * 20);
    const mainMovie=movies?.results[4]
    console.log(mainMovie)
    const {title, overview,id}= mainMovie;
    console.log(id);
  return (
    <div >
        <VideoTitle title={title} overview={overview}/>
        <VideoBackground movieID={id}/>
    </div>
  )
}

export default MainContainer

