import {takeEvery, put, call} from 'redux-saga/effects'
import { Room } from '../models'
import { fetchDataFail, fetchDataSuccess } from './actionCreators'



function* hotelDataSaga(){
    try{
        const data = yield call<Room>()
        yield put(fetchDataSuccess(data))
    }catch(error){
        yield fetchDataFail(error.message)
    }
}

