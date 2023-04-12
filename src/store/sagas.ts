import {takeEvery, put, call} from 'redux-saga/effects'
import { fetchDataFail, fetchDataSuccess } from './actionCreators'



function* hotelDataSaga(){
    try{
        const data = yield call()
        yield put(fetchDataSuccess(data))
    }catch(error){
        yield fetchDataFail(error.message)
    }
}
