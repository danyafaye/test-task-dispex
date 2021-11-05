import React from "react";
import './styles/App.css';
import Address from "./components/Address/Address";
import ClientList from "./components/ClientList/ClientList";
import {Route} from "react-router-dom";
import ClientManagement from "./components/ClientManagement/ClientManagement";

const App = () => {
  return (
      <div>
      <Address/>
      <Route path="/clientlist" render={()=><ClientList/>}/>
      <Route path="/clientmanagement" render={()=><ClientManagement/>}/>
      </div>
  );
}

export default App;
