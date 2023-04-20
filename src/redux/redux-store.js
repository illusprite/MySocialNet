import { combineReducers, legacy_createStore} from "redux";
import messengerPageReducer from "./messengerPage-reducer";
import profilePageReducer from "./profilePage-reducer";

let reducers = combineReducers({
   profilePageReducer: profilePageReducer,
   messengerPageReducer: messengerPageReducer
});

let store = legacy_createStore(reducers);

export default store;