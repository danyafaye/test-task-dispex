import React from "react";
import './styles/App.css';
import AddressAndClientList from "./components/Address/AddressAndClientList";
import 'antd/dist/antd.css';
import {Layout} from "antd";

const {  Content, Footer } = Layout;

const App = () => {
    return (
        <div className="app-wrapper">
            <Layout className="layout">
                <Content style={{padding: '0 50px'}}>
                    <div className="site-layout-content">
                        <AddressAndClientList/>
                    </div>
                </Content>
                <Footer></Footer>
            </Layout>
        </div>
    );
}

export default App;
