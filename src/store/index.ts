import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "redux";

const sagaMiddleWare = createSagaMiddleware()
const reducer = combineReducers({})

export const store = createStore(reducer, applyMiddleware())