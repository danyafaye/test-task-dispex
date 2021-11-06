import {clientListApi} from "../api/clientlist-api";

const CLIENTS_CLIENTLIST = 'CLIENTS/CLIENTLIST';

let initialState = {
    id: 0,
    name: "",
    phone: "",
    email: "",
    bindId: 0
}

const clientListReducer = (state = initialState, action) => {
    switch(action.type) {
        case CLIENTS_CLIENTLIST:
        return{
            ...state,
            name: action.data.Name,
            phone: action.data.Phone,
            email: action.data.Email

        }
    default:
        return state;
}}


//action creator
const actions = {
    setClientList: (data) => ({type: 'CLIENTS/CLIENTLIST', data}),
}

//thunk creator
export const getClientList = (addressId = 0) => {
    return async(dispatch)=>{
        let data = await clientListApi.getClientList(addressId);
        dispatch(actions.setClientList(data));
    }
}
export default clientListReducer;