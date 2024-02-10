import {useDispatch,useSelector} from "react-redux";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constants";
const useVideoTrailer=(movieID)=>{
    const dispatch=useDispatch()
    console.log("id",movieID)
      const fetchTrailer=async ()=>{
          const movieVideos=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US", API_OPTIONS)
          const json= await movieVideos.json();
          const filterData= json?.results?.filter(video=> video.type==="Trailer")
          const trailer=filterData?.length? filterData[0]:json?.results[0]
          console.log(trailer.key)
          dispatch(addTrailerVideo(trailer.key))
      }
      useEffect(()=>{
          fetchTrailer();
      },[])
  
      const trailerKey = useSelector((store)=> store.movie.trailerVideo);
      return trailerKey;
}
export default useVideoTrailer