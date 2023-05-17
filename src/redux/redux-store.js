import { combineReducers, legacy_createStore} from "redux";
import messengerPageReducer from "./messengerPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
   profilePageReducer: profilePageReducer,
   messengerPageReducer: messengerPageReducer,
   usersPageReducer: usersPageReducer,
   authReducer: authReducer
});

let store = legacy_createStore(reducers);

export default store;