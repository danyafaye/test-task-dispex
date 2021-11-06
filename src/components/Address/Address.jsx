import {Select} from "antd";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestHouseFlats, requestHouses, requestStreets} from "../../redux/addressReducer";
import "./Address.css"

const {Option} = Select;

const Address = () => {
    const dispatch = useDispatch();
    const [streetId, setStreetId] = useState("");
    const [streetName, setStreetName] = useState("");
    const [houseId, setHouseId] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [houseFlatId, setHouseFlatId] = useState("");
    const [houseFlatNumber, setHouseFlatNumber] = useState('');
    useEffect(()=>{dispatch(requestStreets())});
    useEffect(()=>{dispatch(requestHouses(streetId))},
        [streetId]);
    useEffect(()=>{dispatch(requestHouseFlats(houseId))},
        [houseId])
    const streets = useSelector(state => state.address.streets);
    const houses = useSelector(state => state.address.houses);
    const houseFlats = useSelector(state => state.address.houseFlats);
    return <div className="app-address">
        <p>
            Адрес
        </p>

        <Select showSearch
            style={{width: 200}}
            placeholder="Улица"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            }
            onSelect={(value, option)=>{
                setStreetId(option.key);
                setStreetName(option.value);
            }}>
            {streets.map(key => <Option key={key.id} value={key.name}>{key.name}</Option>)}
        </Select>
        <Select showSearch
            style={{width: 80}}
            placeholder="Дом"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            } onSelect={(value, option)=>{
                setHouseId(option.key);
                setHouseNumber(option.value);
            }}>
            {houses.map(key => <Option key={key.id} value={key.name}>{key.name}</Option>)}
        </Select>
        <Select showSearch
            style={{width: 110}}
            placeholder="Кв/офис"
            optionFilterProp="children"
            filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
                optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
            } onSelect={(value, option)=>{
                setHouseFlatId(option.key);
                setHouseFlatNumber(option.value);
            }}>
            {houseFlats.map(key => <Option key={key.id} value={key.name}>{key.name}</Option>)}
        </Select>
        <p className="app-address-street">
            {streetName? <span>ул. {streetName}</span> : ""}
            {houseNumber? <span>, {houseNumber}</span> : ""}
            {houseFlatNumber ? <span>, {houseFlatNumber}</span> : ""}
        </p>
    </div>
}

export default Address;