import React from 'react'
import Header from './Header';
import usePlayingnowMovies from '../hooks/usePlayingNowMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  usePlayingnowMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      </div>      
  )
}

export default Browse