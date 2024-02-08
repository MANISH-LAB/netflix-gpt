import React from 'react'
import {useSelector} from "react-redux";
import Header from './Header';
const Browse = () => {
  const userData=useSelector((store)=>store.user)
  console.log(userData)  

  return (
    <div>
      <Header/>
      <div className='p-32'>
      <h1>{userData && ("Welcome "+ userData.displayName)}</h1>
      </div>
      </div>
      
  )
}

export default Browse