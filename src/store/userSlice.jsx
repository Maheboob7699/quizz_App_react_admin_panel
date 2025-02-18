import { createSlice } from "@reduxjs/toolkit";
const localUser = JSON.parse(localStorage.getItem("userDetails")) || [];
let initialState={
    userIndex:0,
   specificUserIndex :0,
   user:localUser,
}
const userSlice = createSlice({
    name:"indexes-of-user",
    initialState,
    reducers:{
        handleTest:(state,action)=>{
          state.userIndex = action.payload
        },
        handleResult:(state,action)=>{
            state.specificUserIndex = action.payload
        }
    }
})

export const {handleTest,handleResult} = userSlice.actions;
export default userSlice.reducer;