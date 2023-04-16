import { FETCH_DATA_FAIL, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_SINGLE_DATA_REQUEST } from "./actions"


export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST
})

export const fetchSingleDataRequest = (payload: any) => ({
    type: FETCH_SINGLE_DATA_REQUEST,
    payload
})
    
export const fetchDataSuccess = (payload: any) => (
    {
        type: FETCH_DATA_SUCCESS,
        payload
    }
)


export const fetchDataFail = () => (
    {
        type: FETCH_DATA_FAIL,

    }
)