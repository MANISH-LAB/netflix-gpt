import React, { useRef } from 'react'
import Header from './Header'
import { useState } from 'react';
import { validate } from '../utils/validate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import { addUser, removeUser } from '../utils/userSlice';
import { onAuthStateChanged ,updateProfile} from 'firebase/auth';
import { USER_AVATAR } from '../utils/constants';
const Login = () => {
    const dispatch=useDispatch();
    const [isSignIn, setIsSignIn]=useState(true);
    const [errorMessage,setErrorMessage]=useState(null);

    
    
 
    const toggleIt=()=>{
        setIsSignIn(!isSignIn);
    }
    const navigate=useNavigate();
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const clickHandler=()=>{
        if(name.current!==null){
            if(email.current.value==="" || password.current.value===""){
                setErrorMessage("email or password can not be blank")
              }
              else{
            const message=validate(name.current.value,email.current.value,password.current.value);
          setErrorMessage(message);}
        }
        else{
          if(email.current.value==="" || password.current.value===""){
            setErrorMessage("email or password can not be blank")
          } else{
          const message=validate(null,email.current.value,password.current.value);
          setErrorMessage(message);}
        }

        if(errorMessage===null){
            console.log("erroe msg nul h kya", errorMessage)
              if(!isSignIn){
                const message=validate(name.current.value,email.current.value,password.current.value);
                setErrorMessage(message)
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed up 
                  const user = userCredential.user;
                  console.log(user);
                  updateProfile(auth.currentUser, {
                    displayName:name.current.value,
                   photoURL:USER_AVATAR,
                  }).then(() => {
                   
                  }).catch((error) => {
                console.log("error",error)
                  });
                  
                //   navigate("/browse");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode+"-"+errorMessage)
                  // ..
                });
            }
              else{
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                  // Signed in 
                  
                  
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode+"-"+errorMessage);
                });
              
              }
        }

    
    }
    
  return (
    <div className=''>
        <Header/>
        <div className='absolute bg-black rounded-lg bg-opacity-80 w-3/12 my-40 mx-auto left-0 right-0'>        
            <form className='p-4 m-4 ' onSubmit={(e)=> e.preventDefault()}>
                <h1 className='font-bold p-2 m-2 text-xl text-white'>{isSignIn ? 'Sign In': 'Sign Up'}</h1>
            {!isSignIn && (
                <input type="text"
                ref={name}
                placeholder='Full Name'
                className='p-4 m-2 bg-gray-700 w-full'
                />
            )}
            <input type="text"
            ref={email}
            placeholder='Email Address'
            className='p-4 m-2 bg-gray-700 w-full'
            />
            <input type="Password"
            ref={password}
            placeholder='Password'
            className='p-4 m-2 bg-gray-700 w-full'
           
            />
            {errorMessage && <p className="text-red-700 font-semibold">{errorMessage}</p>}
            <button className='bg-red-700 p-2 m-2 rounded-lg w-full text-white'
            onClick={clickHandler}> 
             {isSignIn? "Sign In":"Sign Up"}
            </button>
            <p className='p-2 m-2 cursor-pointer' onClick={toggleIt}>
                {isSignIn? 
                <div>
                <span className='text-gray-500 font-bold'>New to netflix? 
                </span> <span className='text-white hover:font-semibold' >Sign up now</span> </div>: <div>
                <span className='text-gray-500 font-bold'>Already Registered? 
                </span> <span className='text-white hover:font-semibold' >Sign In</span>
                    </div>}
                
            </p>
        </form>
        </div>
        <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/4da5d2b1-1b22-498d-90c0-4d86701dffcc/98a1cb1e-5a1d-4b98-a46f-995272b632dd/IN-en-20240129-popsignuptwoweeks-perspective_alpha_website_small.jpg"
        alt="bg"
        className=' '
        
        />
        </div>
        

    </div>
  )
}

export default Login