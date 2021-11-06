import React from "react";
import './styles/App.css';
import Address from "./components/Address/Address";
import ClientList from "./components/ClientList/ClientList";
import {Route, Routes} from "react-router-dom";
import ClientManagement from "./components/ClientManagement/ClientManagement";
import 'antd/dist/antd.css';
import {Breadcrumb, Layout} from "antd";

const {  Content, Footer } = Layout;

const App = () => {
    return (
        <div className="app-wrapper">
            <Layout className="layout">
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{ margin: '16px 0' }} className='layout-bread'>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>Информация о жителях</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <Address/>
                        <Routes>
                            <Route path="/clientlist" render={() => <ClientList/>}/>
                            <Route path="/clientmanagement" render={() => <ClientManagement/>}/>
                        </Routes>
                    </div>
                </Content>
                <Footer></Footer>
            </Layout>
        </div>
    );
}

export default App;
