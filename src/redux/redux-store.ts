import { applyMiddleware, combineReducers, legacy_createStore} from "redux"
import messengerPageReducer from "./messengerPage-reducer"
import profilePageReducer from "./profilePage-reducer"
import usersPageReducer from "./usersPage-reducer"
import authReducer from "./auth-reducer"
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer"

let reducers = combineReducers({
   profilePageReducer: profilePageReducer,
   messengerPageReducer: messengerPageReducer,
   usersPageReducer: usersPageReducer,
   authReducer: authReducer,
   app: appReducer,
   form: formReducer
});

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>
//Return type используется для указания типа значения, которое функция возвращает
let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.__store__ = store

export default store