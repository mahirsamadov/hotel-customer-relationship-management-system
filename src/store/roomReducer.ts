import { BaseState, IRoom } from "../models"
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAIL, FETCH_SINGLE_DATA_REQUEST } from "./actions"

const initialState: BaseState<IRoom> = {
    data: [],
    loading: false,
    error: false
}

const roomReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case FETCH_SINGLE_DATA_REQUEST:
                return {
                    ...state,
                    loading: true,
                    error: false
                }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case FETCH_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state
    }
}

export default roomReducer