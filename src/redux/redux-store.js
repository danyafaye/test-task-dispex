import {combineReducers, createStore, applyMiddleware} from "redux"
import addressReducer from "./addressReducer";
import clientListReducer from "./clientListReducer";
import clientManagementReducer from "./clientManagementReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers(
    {
        address: addressReducer,
        clientList: clientListReducer,
        clientManagement: clientManagementReducer
    }
)

const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store;