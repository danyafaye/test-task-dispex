import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getClientList} from "../../redux/clientListReducer";
import {Card, Col, Row} from "antd";
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
            <Row>
                {clientListState.map(key => <Col span={6} key={key.id}><Card hoverable className="app-clients-card"
                                                                             style={{margin: 10}}
                                                                             actions={[<DeleteOutlined/>,
                                                                                 <EditOutlined key="edit"/>]}>
                    <UserOutlined/>
                    {key.name ? <p className="app-clients-name">{key.name}</p> : ""}
                    {key.phone ? <p className="app-clients-phone"><PhoneOutlined/> {key.phone}</p> : ""}
                    {key.email ? <p className="app-clients-email"><MailOutlined/> {key.email}</p> : ""}
                </Card>
                </Col>)}
            </Row>
        </div>
    )
}

export default ClientList;