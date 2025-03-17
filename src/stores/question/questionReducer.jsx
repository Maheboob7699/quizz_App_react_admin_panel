import { createSlice } from "@reduxjs/toolkit";
let initialState ={
    questions:[],
    showQuestion:[],
    showQuestionPage:false,
    addQuestionPage:false,
    deleteQuestionPage:false,
    editeQuestionPage:false,
    deleteIndex : '',
    editIndex:'',
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

         showAddQuestion:(state,action)=>{
            state.addQuestionPage = true
         },

         addQuestion:(state,action)=>{
            console.log(action.payload);
            state.questions = [...state.questions,action.payload]
            state.addQuestionPage = false;
         },

         cancelDeleteQuestionPage:(state,action)=>{
            state.deleteQuestionPage = false
         },

         setDeleteIndex:(state,action)=>{
            state.deleteIndex = action.payload
            state.deleteQuestionPage = true;
         },

         deleteQuestion:(state,action)=>{
          let updatedQuestions = state.questions.filter((item,index)=>{
              return index !== state.deleteIndex
          })
          state.questions = updatedQuestions;
          state.deleteQuestionPage = false
         },

         setEditIndex:(state,action)=>{
            state. editIndex =action.payload,
            state. editeQuestionPage = true;
         },

         cancelEditQuestionPage:(state,action)=>{
            state.editeQuestionPage = false
         },

         updateEditQuestion:(state,action)=>{
            console.log(action.payload);
            console.log(state.editIndex);
            
            
            state.questions = state.questions.map((item, i) =>
               i === state.editIndex 
                   ? { ...item, ...action.payload } 
                   : item
           );
            state.editeQuestionPage = false
         }
    }
})

export const {fetchQuestionRequest,fetchQuestionSuccess,fetchQuestionError,showQuestion,cancelShowQuestionPage, showAddQuestion,addQuestion,cancelDeleteQuestionPage,setDeleteIndex,deleteQuestion, setEditIndex,cancelEditQuestionPage,updateEditQuestion} = questionSlice.actions;

export default questionSlice.reducer;