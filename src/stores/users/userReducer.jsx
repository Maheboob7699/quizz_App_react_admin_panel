import { createSlice } from "@reduxjs/toolkit";
let initialState={
    user:[],
    userIndex:0,
    specificUserIndex:0,
    error:'',
}

const userSlice = createSlice({
 name:"user-data",
 initialState,
 reducers:{
      fetchUserRequest:(state,action)=>{
      },

      fetchUserSuccess:(state,action)=>{
        state.user = action.payload
      },

      fetchUserError:(state,action)=>{
        state.error = action.payload
      },

      handleTest:(state,action)=>{
        state.userIndex = action.payload
      },
      handleResult:(state,action)=>{
        state.specificUserIndex = action.payload
    }

      

 }

})

export const {fetchUserRequest,fetchUserSuccess,fetchUserError,handleTest,handleResult} = userSlice.actions;
export default userSlice.reducer;