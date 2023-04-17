import { NavigateFunction } from "react-router-dom";
import { Dispatch } from "redux";
import DataService from "../Service/DataService";
import { AUTH, AUTH_FAIL, LOGIN } from "../store/actions";

export const getSignIn = (dispatch: Dispatch, navigate: NavigateFunction)=>{

return async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   const credentials = await DataService.checkUser()
   const isUsername = credentials.filter(user => user.username === data.get('username'))
   const isPassword = credentials.filter(user => user.password === data.get('password'))
   if(isUsername.length && isPassword.length){ 
    dispatch({type: LOGIN}); navigate('/')
  }else{
    dispatch({type: AUTH_FAIL})
  }
  };

}