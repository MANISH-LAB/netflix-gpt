import React from 'react'
import Header from './Header';
import usePlayingnowMovies from '../hooks/usePlayingNowMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopratedMovies from '../hooks/useTopratedMovies';
import useTrendingMovies from '../hooks/useTrendingMovies';
import {useSelector,useDispatch} from "react-redux";
import GptSearch from './GptSearch';
const Browse = () => {
  usePlayingnowMovies();
  usePopularMovies();
  useTopratedMovies();
  useTrendingMovies();
  const gptON=useSelector(store=>store.gpt.gptON)
  
  return (
    <div className=''>
      <Header/>
      {gptON ? <GptSearch/>: 
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
      </div>      
  )
}

export default Browse