import {instance} from "./api";

export const clientListApi = {
    getClientList(addressId) {
        return instance.get(`/HousingStock/clients?=${addressId}`)
            .then(res=>res.data)
    }
}