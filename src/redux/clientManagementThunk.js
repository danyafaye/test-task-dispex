import {clientManagementApi} from "../api/clientmanagement-api";
import {getClientList} from "./clientListReducer";

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