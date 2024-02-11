import React, { useEffect,useState } from 'react'
import {useSelector,useDispatch} from "react-redux";
import UserHeader from './UserHeader';
import {useNavigate, useSearchParams} from "react-router-dom"
import { onAuthStateChanged ,updateProfile} from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { LOGO } from '../utils/constants';

const Header = () => {
 const user=useSelector((store)=> store.user);
 const [state,setState]=useState(false);
 const dispatch=useDispatch()
 const navigate=useNavigate();

  useEffect(()=>{const unsubscribe=onAuthStateChanged(auth, (user) => {
    console.log("added",user)
    if (user) {
      const {email,displayName,photoURL}=user
      dispatch(addUser({email:email,displayName:displayName,photoURL:photoURL}));
      setState(true)
      navigate("/browse")
    } else {
      dispatch(removeUser())
      navigate("/")
    }
  });
 
  return ()=>unsubscribe()

},[])
  return (
    <div className="bg-gradient-to-b absolute from-zinc-950  z-50 justify-between flex">
        <img src={LOGO}
        alt="netflix logo"
        className="px-8 py-2 w-2/12 "
        />
        {(user && state) && <UserHeader/>}
    </div>
  )
}

export default Header