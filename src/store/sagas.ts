import { call, takeEvery, put } from 'redux-saga/effects';
import { fetchDataRequest } from './actionCreators';


function* getRoomsSaga() {
  const rooms = yield call(getRooms);
  yield put({ type: fetchDataRequest(), payload: rooms });
}

function* getRoomsWatcher() {
  yield takeEvery(fetchDataRequest, getRoomsSaga);
}

function* rootSaga() {
  yield getRoomsWatcher();
}

export default rootSaga