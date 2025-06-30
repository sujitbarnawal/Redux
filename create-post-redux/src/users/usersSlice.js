import { createSlice } from "@reduxjs/toolkit";

const initialState=[
    {id:"1",name:"John"},
    {id:"2",name:"Jane"},
    {id:"3",name:"Bob"},
]

const usersSlice=createSlice({
    name:"users",
    initialState:initialState,
    reducers:{}
})

export const selectAllUsers=(state)=>state.users
export default usersSlice.reducer