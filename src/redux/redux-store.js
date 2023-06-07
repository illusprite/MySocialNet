import { applyMiddleware, combineReducers, legacy_createStore} from "redux";
import messengerPageReducer from "./messengerPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let reducers = combineReducers({
   profilePageReducer: profilePageReducer,
   messengerPageReducer: messengerPageReducer,
   usersPageReducer: usersPageReducer,
   authReducer: authReducer,
   app: appReducer,
   form: formReducer
});

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;