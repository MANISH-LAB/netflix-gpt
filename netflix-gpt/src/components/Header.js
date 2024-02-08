import React from 'react'
import {useSelector} from "react-redux";
import UserHeader from './UserHeader';
const Header = () => {
 const user=useSelector((store)=> store.user);

  return (
    <div className="bg-gradient-to-b from-zinc-950 absolute z-32 justify-between flex">
        <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="netflix logo"
        className="px-8 py-2 w-2/12 "
        />
        {user && <UserHeader/>}
    </div>
  )
}

export default Header