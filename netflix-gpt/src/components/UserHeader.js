import React from 'react'
import { useState } from 'react';
import {useSelector} from "react-redux"
import { auth } from '../utils/firebase';
import {useNavigate} from "react-router-dom"
import { signOut } from 'firebase/auth';
import {useDispatch} from "react-redux"
import { removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const UserHeader = () => {
    const [menuVisible,setMenuVisible] = useState(false);
    const navigate=useNavigate();
    const gptON=useSelector(store=>store.gpt.gptON)
    const dispatch = useDispatch()
    const pullDownHandler=()=>{
        setMenuVisible(!menuVisible)
       
    }
    const userdata=useSelector((store)=> store.user)
    const signOutHandler=()=>{
        signOut(auth).then(() => {
            dispatch(removeUser())
            navigate("/");
          }).catch((error) => {
            // An error happened.
          });
    }
    const toggleSearch=()=>{
      dispatch(toggleGptSearch());
    }
    const selectLanguage=(e)=>{
        dispatch(changeLanguage(e.target.value));
    }
 
  return (
    <div>
        <div className='relative inline-block flex'> {/* Add relative positioning to the container */}
       {gptON && 
       <select 
       className='p-2 m-2 bg-black text text-red-700 font-semibold rounded-lg'
       onChange={selectLanguage}
       >
        {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.name} value={lang.identifier}>{lang.value}</option>)}
       </select>
       
       }
        <button className='bg-purple-800 p-2 m-4 text-white rounded-lg font-semibold' onClick={toggleSearch}>{gptON? "Home":"GPT Search"}</button>
  <img 
    className='w-12 h-16 pt-4 mt-2 mr-8 rounded-full cursor-pointer'
    alt="usericon"
    src={userdata.photoURL}
    onClick={pullDownHandler}
  />
  
  {menuVisible && (
    <div className='absolute right-0 mt-10 w-40 mr-4 bg-black bg-opacity-80 p-4 rounded'>
      <ul className='list-none'>
        <li className='cursor-pointer hover:text-black bg-red-700 text-white p-2 m-2'>Profile</li>
        <li className='cursor-pointer hover:text-black bg-red-700  text-white p-2 m-2' onClick={signOutHandler}>LogOut</li>
      </ul>
    </div>
  )}
</div>
</div>
  )
}

export default UserHeader