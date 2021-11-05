import {instance} from "./api";

export const addressApi = {
    getStreets() {
        return instance.get(`/Request/streets`)
            .then(res => res.data)
    },
    getHouses(id) {
        return instance.get(`/Request/houses/` + id)
            .then(res => res.data)
    },
    getHouseFlats(id) {
        return instance.get(`/Request/house_flats/` + id)
            .then(res => res.data)
    }
}