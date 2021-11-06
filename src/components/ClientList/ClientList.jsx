import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getClientList} from "../../redux/clientListReducer";
import {Card} from "antd";
import {DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined, UserOutlined} from "@ant-design/icons";
import "./ClientList.css"

const ClientList = (props) => {
    const clientListState = useSelector(state => state.clientList.clients)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClientList(props.houseFlatId))
    }, [props.houseFlatId])
    return (
        <div className="app-clients">
            {clientListState.map(key => <Card hoverable className="app-clients-card" style={{margin: 10}}
                                              actions={[<DeleteOutlined/>, <EditOutlined key="edit"/>]}>
                <UserOutlined/>
                <p key={key.id} className="app-clients-name">{key.name}</p>
                <p key={key.id} className="app-clients-phone"><PhoneOutlined/> {key.phone}</p>
                <p key={key.id} className="app-clients-email"><MailOutlined/> {key.email}</p>
            </Card>)}
        </div>
    )
}

export default ClientList;