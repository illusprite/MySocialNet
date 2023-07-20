import { AppStateType } from './redux-store';
import { stopSubmit } from "redux-form";
import { ResultCodesEnum, ResultCodeForCaptcha, authAPI, securityAPI } from "../api/api";
import { ThunkAction } from 'redux-thunk';

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
export type SetAuthUserDataActionType = {
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


type ActionsTypes = SetAuthUserDataActionType | GetCaptchaUrlSuccessActionType
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getAuthUserData = (): ThunkType => async (dispatch: any) => {
   let response = await authAPI.me();
   if (response.resultCode === ResultCodesEnum.Success) {
      let { id, email, login } = response.data;
      dispatch(setAuthUserData(id, email, login, true));
   }
};

export const login = (email: null | string, password: null | string, rememberMe: boolean, captcha: string): ThunkType => async (dispatch: any) => {
   let response = await authAPI.login(email, password, rememberMe, captcha);
   if (response.resultCode === ResultCodesEnum.Success) {
      dispatch(getAuthUserData());
      dispatch(getCaptchaUrlSuccess(null));
   } else {
      if (response.resultCode === ResultCodeForCaptcha.CapthaIsRequired) {
         dispatch(getCaptchaUrl());
      }
      let message = response.messages.length > 0 ? response.messages[0] : "Some error";
      dispatch(stopSubmit("login", { _error: message }));
   }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch: any) => {
   const response = await securityAPI.getCaptchaUrl();
   const captchaUrl = response.url;
   dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = (): ThunkType => async (dispatch: any) => {
   let response = await authAPI.logout();
   if (response.data.resultCode === ResultCodesEnum.Success) {
      dispatch(setAuthUserData(null, null, null, false));
   }
};
export default authReducer