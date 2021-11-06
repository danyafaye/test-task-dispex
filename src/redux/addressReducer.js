import {addressApi} from "../api/address-api";

const ADDRESS_STREET = 'ADDRESS/STREET';
const ADDRESS_HOUSE = 'ADDRESS/HOUSE';
const ADDRESS_HOUSE_FLAT = 'ADDRESS/HOUSE_FLAT'

let initialState = {
    streets: [],
    houses: [],
    houseFlats: []
};

const addressReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDRESS_STREET:
            return {
                ...state,
                streets: action.streets
            }
        case ADDRESS_HOUSE:
            return{
                ...state,
                houses: action.houses
            }
        case ADDRESS_HOUSE_FLAT:
            return {
                ...state,
                houseFlats: action.houseFlats
            }
        default:
            return state;
    }
};

//action creator
const setStreet = (streets) => ({type: 'ADDRESS/STREET', streets});
const setHouse = (houses) => ({type: 'ADDRESS/HOUSE', houses});
const setHouseFlats = (houseFlats) => ({type: 'ADDRESS/HOUSE_FLAT', houseFlats});

//thunk creator
export const requestStreets = () => async (dispatch) => {
    let response = await addressApi.getStreets();
    dispatch(setStreet(response));
}
export const requestHouses = (id) => async(dispatch) => {
    let response = await addressApi.getHouses(id);
    dispatch(setHouse(response));
}
export const requestHouseFlats = (id) => async(dispatch) => {
    let response = await addressApi.getHouseFlats(id);
    dispatch(setHouseFlats(response));
}

export default addressReducer;