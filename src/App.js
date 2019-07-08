import React from "react";
import "./App.css";
import ManageOrders from "./containers/ManageOrders";
import {Route, Switch} from "react-router";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Switch>
        <Route path="/" exact component={NavBar}/>
        <Route path="/orders/" exact component={ManageOrders}/>
        <Route path="/orders/:id" component={ManageOrders}/>
    </Switch>
  );
}

export default App;
