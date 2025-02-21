import { configureStore } from "@reduxjs/toolkit";
import indexReducer from './userSlice';
import questionReducer from './questionSlice';

export const store = configureStore({
   reducer:{
    usersData:indexReducer,
    questionData:questionReducer,
   }
})