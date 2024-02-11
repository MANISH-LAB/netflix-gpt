import {useDispatch,useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const useTrendingMovies=()=>{
    const dispatch=useDispatch()
    const movieData= async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",API_OPTIONS)
        const json=await data.json();
        console.log(json)
        dispatch(addTrendingMovies(json));
     
       }
       useEffect(()=>{
         movieData();
       },[])
}
export default useTrendingMovies