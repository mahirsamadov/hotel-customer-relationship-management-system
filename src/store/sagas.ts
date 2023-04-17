import { useParams } from 'react-router-dom';
import { call, takeEvery, put, all } from 'redux-saga/effects';
import DataService from '../Service/DataService';
import { fetchDataFail, fetchDataRequest, fetchDataSuccess } from './actionCreators';
import {LOGIN, LOGOUT, FETCH_DATA_FAIL, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_SINGLE_DATA_REQUEST, AUTH } from './actions';


function* getRoomsSaga():Generator {
  try{
    const rooms = yield call(DataService.getRooms);
  yield put({ type: FETCH_DATA_SUCCESS, payload: rooms });
  }catch(error){
    yield put(fetchDataFail());
  }
}

function* getRoomSaga(action: any):Generator {
  try{
    const room = yield call(()=>DataService.getRoom(action.payload));
  yield put({ type: FETCH_DATA_SUCCESS, payload: room });
  }catch(error){
    yield put(fetchDataFail());
  }
}


function* getAccountsSaga():Generator{
  try{
    const accounts = yield call(DataService.checkUser)
  yield put({type: LOGIN, payload: accounts})
  }catch(error){
    yield put({type: LOGOUT})
  }
}

function* getAccountsWatcher(){
  yield takeEvery(AUTH, getAccountsSaga)
}

function* getRoomsWatcher() {
  yield takeEvery(FETCH_DATA_REQUEST, getRoomsSaga);
}

function* getRoomWatcher() {
  yield takeEvery(FETCH_SINGLE_DATA_REQUEST, getRoomSaga);
}

function* rootSaga() {
  yield all([getRoomsWatcher(), getRoomWatcher(), getAccountsWatcher()]);
}

export default rootSaga