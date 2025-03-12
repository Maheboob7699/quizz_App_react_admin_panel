import { configureStore } from "@reduxjs/toolkit";
import usersReducer from './/users/userReducer'
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { UserSaga } from "./users/userSaga";

const sagaMiddleWare = createSagaMiddleware();

function* rootSaga(){
    yield all([
        UserSaga()
    ])
}

export const store = configureStore({
    reducer: { 
        userData: usersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga)