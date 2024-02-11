import React from 'react'

const VideoTitle = ({title ,overview})=>{

    return (
    <div className='pt-[20%] px-12 w-screen aspect-video bg-gradient-to-r text-white from-black absolute z-20' >
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='text-lg py-6 w-1/4'>{overview}</p>
        <div className='flex'>
            <button className='w-32 h-12  bg-gray-200 text-black text-xl rounded-md hover:bg-opacity-60 hover:font-semibold}'> ▶️Play</button>
            <button className='w-32 h-12 mx-2 bg-gray-500 text-white text-xl rounded-md'> ℹ️ More Info</button>
        </div>
    </div>)
}


export default VideoTitle