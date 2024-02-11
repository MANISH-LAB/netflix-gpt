import React from 'react'
import {useSelector} from "react-redux"
import MovieList from './MovieList'
const SecondaryContainer = () => {
    const movies=useSelector(store=> store.movie)
   console.log(movies)
  return (movies?.topRatedMovies &&
    <div className=' bg-black'>
        <div className='-mt-72 relative z-20'>
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies?.results}/>
      <MovieList title="Trending" movies={movies?.trendingMovies?.results}/>
      <MovieList title="Popular" movies={movies?.popularMovies?.results}/>
      <MovieList title="Top Rated" movies={movies?.topRatedMovies?.results}/>
     
      {/* <MovieList title="Now Playing" movies={movies?.nowPlayingMovies.results}/>
      <MovieList title="Popular" movies={movies?.PopularMovies.results}/>
      <MovieList title="Now Playing" movies={movies?.nowPlayingMovies.results}/>
      <MovieList title="Popular" movies={movies?.PopularMovies.results}/> */}
      
      </div>
    </div>
  )
}

export default SecondaryContainer