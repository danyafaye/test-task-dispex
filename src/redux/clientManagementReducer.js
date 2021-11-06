import {clientManagementApi} from "../api/clientmanagement-api";

const CLIENTS_SET_CLIENT_ADDED = 'CLIENTS/SET_CLIENT_ADDED'

let initialState = {
    id:0,
    Name: "",
    Phone: "",
    Email: ""
}

const clientManagementReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLIENTS_SET_CLIENT_ADDED:
            return{
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

//action creator
const actions = {
    setClientAdded: (id, phone, email, name) => ({type: 'CLIENTS/SET_CLIENT_ADDED', payload:{id, phone, email, name}}),
}

//thunk creator
export const getClientList = (phone, email, name) => {
    return async(dispatch)=>{
        let data = await clientManagementApi.addClient(phone, email, name);
        dispatch(actions.setClientList(data.id, phone, email, name));
    }
}
export default clientManagementReducer;