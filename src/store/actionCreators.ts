import { FETCH_DATA_FAIL, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS } from "./actions"


export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})
    
export const fetchDataSuccess = (payload: any) => (
    {
        type: FETCH_DATA_SUCCESS,
        payload
    }
)


export const fetchDataFail = (payload: any) => (
    {
        type: FETCH_DATA_FAIL,
        payload
    }
)