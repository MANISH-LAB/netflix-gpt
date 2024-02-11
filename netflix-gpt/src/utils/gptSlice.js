import {createSlice} from "@reduxjs/toolkit";
const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        gptON:false
    },
    reducers:{
        toggleGptSearch:(state)=>{
            state.gptON=!state.gptON;
        }
    }
})
export const {toggleGptSearch} =gptSlice.actions;
export default gptSlice.reducer