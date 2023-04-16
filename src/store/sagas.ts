import { call, takeEvery, put } from 'redux-saga/effects';
import DataService from '../Service/DataService';
import { fetchDataFail, fetchDataRequest, fetchDataSuccess } from './actionCreators';
import { FETCH_DATA_FAIL, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from './actions';


function* getRoomsSaga():Generator {
  try{
    const rooms = yield call(DataService.getRooms);
  yield put({ type: FETCH_DATA_SUCCESS, payload: rooms });
  }catch(error){
    yield put(fetchDataFail());
  }
}

function* getRoomsWatcher() {
  yield takeEvery(FETCH_DATA_REQUEST, getRoomsSaga);
}

function* rootSaga() {
  yield getRoomsWatcher();
}

export default rootSaga