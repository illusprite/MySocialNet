import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
   initialized: false
};

const appReducer = (state = initialState, action) => {
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
export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});//return не нужен, он вместо ()

export const initializeApp = () => {
   return (dispatch) => {
      let promise = dispatch(getAuthUserData());
      Promise.all ([promise]).then( ()=> {
         dispatch(initializedSuccess());
      });
      //Призавершениие асинхронной операции let promise = dispatch(getAuthUserData()); происходит
      //dispatch(initializedSuccess());
   }
}

export default appReducer;