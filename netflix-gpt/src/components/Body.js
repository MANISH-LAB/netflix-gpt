import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice'
const Body = () => {
    
    const appRoot=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        }
    ])
    
  return (
    <div>
        <RouterProvider router={appRoot}/>
    </div>
  )
}

export default Body