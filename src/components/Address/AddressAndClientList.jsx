import {Button, Input, Modal, Select} from "antd";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestHouseFlats, requestHouses, requestStreets} from "../../redux/addressReducer";
import "./AddressAndClientList.css"
import ClientList from "../ClientList/ClientList";
import {UserAddOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import {addClient} from "../../redux/clientManagementThunk";

const {Option} = Select;
//todo:refactor repeated code
const AddressAndClientList = () => {
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [streetId, setStreetId] = useState("");
    const [streetName, setStreetName] = useState("");
    const [houseId, setHouseId] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [houseFlatId, setHouseFlatId] = useState("");
    const [houseFlatNumber, setHouseFlatNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [clientName, setClientName] = useState("");
    useEffect(() => {
        dispatch(requestStreets())
    });
    useEffect(() => {
            dispatch(requestHouses(streetId))
        },
        [streetId]);
    useEffect(() => {
            dispatch(requestHouseFlats(houseId))
        },
        [houseId])
    const streets = useSelector(state => state.address.streets);
    const houses = useSelector(state => state.address.houses);
    const houseFlats = useSelector(state => state.address.houseFlats);
    const showModal = () => {
        setVisible(true);
    };
    const handleOk = () => {
        dispatch(addClient(0, phoneNumber, email, clientName, houseFlatId));
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
            setPhoneNumber("");
            setClientName("");
            setEmail("");
        }, 2000);
    };

    const handleCancel = () => {
        setVisible(false);
    };
    const phoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const clientNameChange = (e) => {
        setClientName(e.target.value)
    }
    return <div className="app-address-clients">
        <p>
            ??????????
        </p>
        <Select showSearch
                style={{width: 200}}
                placeholder="??????????"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                }
                onSelect={(value, option) => {
                    setStreetId(option.key);
                    setStreetName(option.value);
                }}>
            {streets.map(key => <Option key={key.id} value={key.name}>{key.name}</Option>)}
        </Select>
        <Select showSearch
                style={{width: 80}}
                placeholder="??????"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                } onSelect={(value, option) => {
            setHouseId(option.key);
            setHouseNumber(option.value);
        }}>
            {houses.map(key => <Option key={key.id} value={key.name}>{key.name}</Option>)}
        </Select>
        <Select showSearch
                style={{width: 110}}
                placeholder="????/????????"
                optionFilterProp="children"
                filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                filterSort={(optionA, optionB) =>
                    optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                } onSelect={(value, option) => {
            setHouseFlatId(option.key);
            setHouseFlatNumber(option.value);
        }}>
            {houseFlats.map(key => <Option key={key.id} value={key.name}>{key.name}</Option>)}
        </Select>
        <p className="app-address-street">
            {streetName ? <span>????. {streetName}</span> : ""}
            {houseNumber ? <span>, {houseNumber}</span> : ""}
            {houseFlatNumber ? <span>, {houseFlatNumber}<Button style={{margin: "0 0 0 10px"}} shape="circle" icon={<UserAddOutlined/>}
                                                                 onClick={showModal}/></span> : ""}
        </p>
        <>
            <Modal centered
                   title={[<UserAddOutlined/>, " ???????????????? ????????????"]}
                   visible={visible}
                   onOk={handleOk}
                   confirmLoading={confirmLoading}
                   onCancel={handleCancel}
                   okText={"????????????????"}
                   cancelText={"????????????"}>
                <p style={{"font-weight": 'bold'}}>????. {streetName}, {houseNumber}, {houseFlatNumber}</p>
                <span className="app-phone-text">??????????????</span>
                <span style={{position: "absolute", left: "37%"}}>e-mail</span>
                <div>
                <Input value={phoneNumber} addonBefore="+7" style={{width: 160, margin: "10px 0 0 0"}} onChange={phoneNumberChange}/>
                <Input value={email} style={{width: 300, margin: "10px 0 0 7px"}} onChange={emailChange}/>
                </div>
                <p style={{margin: "10px 0 0 0"}}>??.??.??.</p>
                <Input value={clientName} style={{margin: "10px 0 0 0", width: 350}} onChange={clientNameChange}/>
            </Modal>
        </>
        <ClientList houseFlatId={houseFlatId}/>
    </div>
}

export default AddressAndClientList;