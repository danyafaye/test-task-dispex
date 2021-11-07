import {clientManagementApi} from "../api/clientmanagement-api";
import {getClientList} from "./clientListReducer";

const CLIENTS_SET_CLIENT_ADDED = 'CLIENTS/SET_CLIENT_ADDED'

let initialState = {
    id: 0,
    Name: "",
    Phone: "",
    Email: ""
}

const clientManagementReducer = (state = initialState, action) => {
    switch (action.type) {
        /*case CLIENTS_SET_CLIENT_ADDED:
            return {
                ...state,
                id: action.id,
                Phone: action.phone,
                Email: action.email,
                Name: action.name
            }*/
        default:
            return state;
    }
}

//action creator
const actions = {
    /*setClientAdded: (id, phone, email, name) =>
        ({type: 'CLIENTS/SET_CLIENT_ADDED', payload: {id, phone, email, name}})*/
}

//thunk creator
export const bindClient = (addressId, id) => async (dispatch) => {
    await clientManagementApi.bindClient(addressId, id)
    dispatch(getClientList(addressId))
}
export const addClient = (id = 0, phone, email, name, addressId) => async (dispatch) => {
    let data = await clientManagementApi.addClient(id, phone, email, name, 0);
    dispatch(bindClient(addressId, data.id));
}
export const deleteClient = (addressId, id) => async (dispatch) => {
    await clientManagementApi.deleteClient(id)
    dispatch(getClientList(addressId))
}

export default clientManagementReducer;