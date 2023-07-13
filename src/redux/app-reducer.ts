import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app-reducer/INITIALIZED_SUCCESS';

export type InitialStateType = {
   initialized: boolean
}

let initialState: InitialStateType = {
   initialized: false
};

const appReducer = (state = initialState, action: any): InitialStateType => {//InitialStateType - тип, который возвращается
   switch (action.type) {
      case INITIALIZED_SUCCESS: {
         return {
            ...state,
            initialized: true
         };
      };
      default: {
         return state;
      };
   };
};

type InitializedSuccessActionType = {
   type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = (): InitializedSuccessActionType => ({ type: INITIALIZED_SUCCESS});//return не нужен, он вместо ()

export const initializeApp = () => {
   return (dispatch: any) => {
      let promise = dispatch(getAuthUserData());
      Promise.all ([promise]).then( ()=> {
         dispatch(initializedSuccess());
      });
      //Призавершениие асинхронной операции let promise = dispatch(getAuthUserData()); происходит
      //dispatch(initializedSuccess());
   }
}

export default appReducer;