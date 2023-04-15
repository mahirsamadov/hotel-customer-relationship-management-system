import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";
import rootSaga from "./sagas";

const sagaMiddleWare = createSagaMiddleware()
const reducer = combineReducers({})

const store = createStore(reducer, applyMiddleware(sagaMiddleWare))

sagaMiddleWare.run(rootSaga)

export default store