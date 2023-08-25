import {createSlice} from "@reduxjs/toolkit";
const initialState={
    values:[]
}
const Reducer=createSlice(
    {
        name:"Reducer",
        initialState,
        reducers:{
            provideData:(state,action)=>{
                 state.values.push(action.payload)
            }
        }
    }
)
export const {provideData}=Reducer.actions;
export default Reducer.reducer;