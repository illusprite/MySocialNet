import { combineReducers, legacy_createStore} from "redux";
import messengerPageReducer from "./messengerPage-reducer";
import profilePageReducer from "./profilePage-reducer";
import usersPageReducer from "./usersPage-reducer";

let reducers = combineReducers({
   profilePageReducer: profilePageReducer,
   messengerPageReducer: messengerPageReducer,
   usersPageReducer: usersPageReducer
});

let store = legacy_createStore(reducers);

export default store;