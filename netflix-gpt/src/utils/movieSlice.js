import {createSlice} from "@reduxjs/toolkit"


const movieSlice=createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        popularMovies:null,
        topRatedMovies:null,
        trendingMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopratedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload;
        },
    }
})

export const {addNowPlayingMovies, addTrendingMovies,addTrailerVideo,addPopularMovies,addTopratedMovies} = movieSlice.actions;
export default movieSlice.reducer