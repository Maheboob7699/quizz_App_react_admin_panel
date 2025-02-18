import { configureStore } from "@reduxjs/toolkit";
import indexReducer from './userSlice';

export const store = configureStore({
   reducer:{
    usersData:indexReducer,
   }
})