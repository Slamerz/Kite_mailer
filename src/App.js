import React from "react";
import "./App.css";
import ManageOrders from "./containers/ManageOrders";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";
import MessageForm from "./containers/MessageForm";
import RegisterPage from "./containers/RegisterPage";
import LoginPage from "./containers/LoginPage";

function App() {
  return (
    <Switch>
        <Route path="/" exact component={LoginPage}/>
      <Route path="/send" exact component={MessageForm} />
      <Route path="/orders" exact component={ManageOrders} />
      <Route path="/orders/:id" component={ManageOrders} />
      
        <Route path="/register" exact component={RegisterPage}/>
    </Switch>
  );
}

export default App;
