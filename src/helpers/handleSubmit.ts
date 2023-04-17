import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import DataService from "../Service/DataService";
import { AUTH, AUTH_FAIL, AUTH_REQUEST, LOGIN } from "../store/actions";

export const getSignIn = (dispatch: Dispatch, navigate: NavigateFunction)=>{

return async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    dispatch({type: AUTH_REQUEST})
   const credentials = await DataService.checkUser()
   const isValid = credentials.filter(user => user.username === data.get('username') && user.password === data.get('password'))
  
   if(isValid.length){ 
    dispatch({type: LOGIN}); navigate('/')
  }else{
    dispatch({type: AUTH_FAIL})
  }
  };

}