import React from 'react'
import GptSearchbar from './GptSearchbar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
        
        <div>
        <img src={BG_IMG}
        alt="bg"
        className=' absolute -z-20'
        
        />
        </div>
        <GptSearchbar/>
        <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch