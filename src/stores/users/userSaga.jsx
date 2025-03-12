import axios from "axios";
import { fetchUserRequest,fetchUserSuccess,fetchUserError } from "./userReducer";
import { put, takeLatest } from 'redux-saga/effects';


function* showUserSaga(){
 try{
    let response = yield axios.get('https://json-server-2-aggn.onrender.com/userDetails');
    console.log(response.data);
     yield put(fetchUserSuccess(response.data));
 }
 catch(error){
    yield put(fetchUserError(error));
 }
    
}

 export function* UserSaga(){
       yield takeLatest(fetchUserRequest.type,showUserSaga)
 }
