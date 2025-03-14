import { createSlice } from "@reduxjs/toolkit";
let initialState ={
    questions:[],
    showQuestion:[],
    showQuestionPage:false,
    error:'',

}

const questionSlice = createSlice({
    name:"question-data",
    initialState,
    reducers:{
         fetchQuestionRequest:(state,action)=>{
         },
         fetchQuestionSuccess:(state,action)=>{
            state.questions = action.payload
         },
         fetchQuestionError:(state,action)=>{
            state.error = action.payload
         },

         showQuestion:(state,action)=>{
            state.showQuestion = action.payload
            state.showQuestionPage = true
         },

         cancelShowQuestionPage:(state,action)=>{
            state.showQuestionPage = false
         },

         
    

    }
})

export const {fetchQuestionRequest,fetchQuestionSuccess,fetchQuestionError,showQuestion,cancelShowQuestionPage} = questionSlice.actions;

export default questionSlice.reducer;