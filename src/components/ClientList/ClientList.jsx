import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getClientList} from "../../redux/clientListReducer";
import {Card, Col, Input, Modal, Row} from "antd";
import {
    DeleteOutlined,
    EditOutlined,
    MailOutlined,
    PhoneOutlined,
    UserOutlined
} from "@ant-design/icons";
import "./ClientList.css"
import {addClient, deleteClient} from "../../redux/clientManagementReducer";

const ClientList = (props) => {
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const clientListState = useSelector(state => state.clientList.clients)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getClientList(props.houseFlatId))
    }, [props.houseFlatId]);
    const editClick = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const deleteClientClick = (id) => {
        dispatch(deleteClient(props.houseFlatId,id))
    }
    return (
        <div className="app-clients">
            <Row>
                {clientListState ? clientListState.map(key => <Col span={6} ><Card hoverable className="app-clients-card"
                                                                                   key={key.id}
                                                                                    style={{margin: 10}}
                                                                                    actions={[<DeleteOutlined onClick={() => deleteClientClick(key.bindId)}/>,
                                                                                        <EditOutlined onClick={()=>editClick()}/>]}>
                        <UserOutlined/>
                        {key.name ? <p className="app-clients-name">{key.name}</p> : ""}
                        {key.phone ? <p className="app-clients-phone"><PhoneOutlined/> {key.phone}</p> : ""}
                        {key.email ? <p className="app-clients-email"><MailOutlined/> {key.email}</p> : ""}
                    </Card>
                    <>
                        <Modal centered
                               title="Изменить информацию о жильце"
                               visible={visible}
                               onOk={handleOk}
                               confirmLoading={confirmLoading}
                               onCancel={handleCancel}
                               okText={"Добавить"}
                               cancelText={"Отмена"}>
                            <span className="app-phone-text">Телефон</span>
                            <span style={{position: "absolute", left: "37%"}}>e-mail</span>
                            <div>
                                <Input defaultValue={key.phone} addonBefore="+7" style={{width: 160, margin: "10px 0 0 0"}} />
                                <Input defaultValue={key.email} style={{width: 300, margin: "10px 0 0 7px"}} />
                            </div>
                            <p style={{margin: "10px 0 0 0"}}>Ф.И.О.</p>
                            <Input defaultValue={key.name} style={{margin: "10px 0 0 0", width: 350}} />
                        </Modal>
                    </>
                    </Col>) : <p>Жители на данный момент отсутствуют.</p>}

            </Row>

        </div>
    )
}

export default ClientList;