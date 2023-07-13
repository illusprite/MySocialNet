import { stopSubmit } from "redux-form";
import { authAPI, securityAPI } from "../api/api";

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'
const TOGGLE_IS_FETCHING = 'auth-reducer/TOGGLE_IS_FETCHING'
const GET_CAPTCHA_URL_SUCCESS = 'auth-reducer/GET_CAPTCHA_URL_SUCCESS'

let initialState = {
   userId: null as null | number,
   email: null as null | string,
   login: null as null | string,
   isAuth: false as boolean,
   captchaUrl: null as null | string
};
export type InitialStateType = typeof initialState
//Динамически прибавляется тип в initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
   switch (action.type) {
      case SET_USER_DATA:
      case GET_CAPTCHA_URL_SUCCESS: {
         return {
            ...state,
            ...action.payload
         };
      }
      default: {
         return state;
      };
   };
};

type SetAuthUserDataActionPayloadType = {
   userId: null | number,
   email: null | string,
   login: null | string,
   isAuth: boolean,
}
type SetAuthUserDataActionType = {
   type: typeof SET_USER_DATA, 
   payload: SetAuthUserDataActionPayloadType
}
export const setAuthUserData = (userId: null | number, email: null | string, login: null | string, isAuth: boolean): SetAuthUserDataActionType => ({ 
   type: SET_USER_DATA, 
   payload: { userId, email, login, isAuth} });//return не нужен, он вместо ()


type GetCaptchaUrlSuccessActionType = {
   type: typeof GET_CAPTCHA_URL_SUCCESS
   payload: { captchaUrl: null | string }
}
export const getCaptchaUrlSuccess = (captchaUrl: null | string): GetCaptchaUrlSuccessActionType => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });


export const toggleIsFetching = (isFetching: null | string) => ({ type: TOGGLE_IS_FETCHING, isFetching });


export const getAuthUserData = () => async (dispatch: any) => {
   let response = await authAPI.me();
   if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
};

export const login = (email: null | string, password: null | string, rememberMe: any, captcha: any) => async (dispatch: any) => {
   let response = await authAPI.login(email, password, rememberMe, captcha);
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserData());
      dispatch(getCaptchaUrlSuccess(null));
   } else {
      if (response.data.resultCode === 10) {
         dispatch(getCaptchaUrl());
      }
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
   }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
   const response = await securityAPI.getCaptchaUrl();
   const captchaUrl = response.data.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch: any) => {
   let response = await authAPI.logout();
   if (response.data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
};
export default authReducer