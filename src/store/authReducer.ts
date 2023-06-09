import { data } from "autoprefixer"
import { BaseState, IAuth } from "../models"
import { AUTH_FAIL, AUTH_REQUEST, LOGIN, LOGOUT } from "./actions"

const initialState:BaseState<IAuth> = {
    auth: false,
    data: [],
    loading: false,
    error: false
    
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                auth: true,
                
            }
        case LOGOUT:
            return {
                ...state,
                auth: false
            }
        case AUTH_FAIL:
            return {
                ...state,
                error: true
            }
        case AUTH_REQUEST:
            return {
                ...state,
                loading: true
            }
        default:
            return state
    }
}


export default authReducer