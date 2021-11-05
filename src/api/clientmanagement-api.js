import {instance} from "./api";

export const clientManagementApi = {
    addClient(phone,email,name) {
        return instance.post(`/HousingStock/client`, {phone,email,name})
            .then(res=>res.data)
    },
    updateClientInfo(phone, email, name) {
        return instance.put(`/HousingStock/bind_client`, {phone: phone, email: email, name: name})
            .then(res=>res.data)
    },
    deleteClient(id) {
        return instance.delete(`/HousingStock/bind_client/` + id)
    }
}