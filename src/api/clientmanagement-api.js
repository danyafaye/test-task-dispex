import {instance} from "./api";

export const clientManagementApi = {
    addClient(id,phone,email,name, bindId) {
        return instance.post(`/HousingStock/client`, {id: id, phone: phone,email: email, name: name, bindId: bindId})
            .then(res=>res.data)
    },
    bindClient(addressId, clientId) {
        return instance.put(`/HousingStock/bind_client`, {addressId, clientId})
            .then(res=>res.data)
    },
    deleteClient(id) {
        return instance.delete(`/HousingStock/bind_client/` + id)
    }
}