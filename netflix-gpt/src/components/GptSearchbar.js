import React from 'react'
import { lang } from '../utils/languageConstants'
import {useSelector} from "react-redux"
const GptSearchbar = () => {
    const langkey=useSelector(store=>store.config.lang)
    console.log(langkey)
    console.log(lang[langkey].searchBarPlaceHolder)
  return (
    <div className='justify-center  w-screen' >
        <div className='grid grid-cols-12 px-[33%]  justify-center'>
            < input className=' col-span-9 p-4 mt-40 ' type="text" placeholder={lang[langkey].searchBarPlaceHolder}/>
            <button className=' mt-40 p-4 col-span-3 bg-black text-red-700 font-semibold'>{lang[langkey].search}</button>
        </div>
    </div>
  )
}

export default GptSearchbar