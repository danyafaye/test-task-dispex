import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getClientList} from "../../redux/clientListReducer";
import {Card, Col, Row} from "antd";
import {DeleteOutlined, EditOutlined, MailOutlined, PhoneOutlined, UserOutlined} from "@ant-design/icons";
import "./ClientList.css"
import {deleteClient} from "../../redux/clientManagementReducer";

const ClientList = (props) => {
    const clientListState = useSelector(state => state.clientList.clients)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClientList(props.houseFlatId))
    }, [props.houseFlatId])
    const deleteClientClick = (id) => {
        dispatch(deleteClient(props.houseFlatId,id))
    }
    const editClientClick = (e) => {

    }
    return (
        <div className="app-clients">
            <Row>
                {clientListState ? clientListState.map(key => <Col span={6} ><Card hoverable className="app-clients-card"
                                                                                    style={{margin: 10}}
                                                                                    actions={[<DeleteOutlined onClick={() => deleteClientClick(key.bindId)}/>,
                                                                                        <EditOutlined onClick={editClientClick}/>]}>
                        <UserOutlined/>
                        {key.name ? <p className="app-clients-name">{key.name}</p> : ""}
                        {key.phone ? <p className="app-clients-phone"><PhoneOutlined/> {key.phone}</p> : ""}
                        {key.email ? <p className="app-clients-email"><MailOutlined/> {key.email}</p> : ""}
                    </Card>
                    </Col>) : <p>Жители на данный момент отсутствуют.</p>}

            </Row>
        </div>
    )
}

export default ClientList;