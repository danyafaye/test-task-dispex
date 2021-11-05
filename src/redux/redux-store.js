import {combineReducers, createStore } from "redux"

let reducers = combineReducers(
    {
        address: addressReducer,
        clientList: clientListReducer,
        clientManagement: clientManagementReducer
    }
)

const store = createStore(reducers)
export default store;