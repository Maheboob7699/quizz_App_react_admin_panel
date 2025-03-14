import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './/users/userReducer'
import questionReducer from './question/questionReducer'
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { UserSaga } from "./users/userSaga";
import { questionSaga } from "./question/questionSaga";

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga(){
    yield all([
        UserSaga(),
        questionSaga(),
    ])
}

export const store = configureStore({
    reducer: { 
        userData: usersReducer,
        quizzQuestion:questionReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga)