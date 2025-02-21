import { createSlice } from "@reduxjs/toolkit";


let initialState={
    deleteIndex:0,
    editIndex:0,
    questionDisplay:'',
    show:false,
    hideDelete:false,
    hideCreate:false,
    hideEdit:false,
}

const questionSlice = createSlice({
    name:"question",
    initialState,
    reducers:{
        showQuestion:(state,action)=>{
              state.questionDisplay = action.payload
              state.show =true
        },

        cancleShowQuestion:(state)=>{
            state.show = false;
        },

        editQuestionIndex:(state,action)=>{
            state.editIndex = action.payload
        },
        showEditQuestionComponent:(state)=>{
            state.hideEdit = true;
        },

        hideEditQuestionComponent:(state)=>{
            state.hideEdit = false;
        },
        deleteQuestionIndex:(state,action)=>{
            state.deleteIndex = action.payload
            state.hideDelete=true;
        },

        hideDeleteComponent:(state)=>{
            state.hideDelete=false;
        },
        
        cancleDeleteComponent:(state)=>{
            state.hideDelete = false;
        },

        showCreateQuestionComponent:(state)=>{
            state.hideCreate =true;
        },

        hideCreateQuestionComponent:(state)=>{
             state.hideCreate = false;
        },
       
        
    }
})

export const { showQuestion,cancleShowQuestion,editQuestionIndex,deleteQuestionIndex,hideDeleteComponent,cancleDeleteComponent,showCreateQuestionComponent,hideCreateQuestionComponent,showEditQuestionComponent,hideEditQuestionComponent } = questionSlice.actions;
export default questionSlice.reducer;