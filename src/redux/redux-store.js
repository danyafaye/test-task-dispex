import {combineReducers, createStore, applyMiddleware} from "redux"
import addressReducer from "./addressReducer";
import clientListReducer from "./clientListReducer";
import clientManagementReducer from "./clientManagementReducer";
import thunk from "redux-thunk"

let reducers = combineReducers(
    {
        address: addressReducer,
        clientList: clientListReducer,
        clientManagement: clientManagementReducer
    }
)

const store = createStore(reducers, applyMiddleware(thunk))
export default store;