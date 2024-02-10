import {useDispatch,useSelector} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const usePlayingnowMovies=()=>{
    const dispatch=useDispatch()
    const movieData= async ()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS)
        const json=await data.json();
        console.log(json)
        dispatch(addNowPlayingMovies(json));
     
       }
       useEffect(()=>{
         movieData();
       },[])
}
export default usePlayingnowMovies