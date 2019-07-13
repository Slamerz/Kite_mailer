import React from "react";
import "./App.css";
import ManageOrders from "./containers/ManageOrders";
import { Route, Switch } from "react-router";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import MessageForm from "./containers/MessageForm";
import RegisterPage from "./containers/RegisterPage";

function App() {
  return (
    <Switch>
        <Route path="/" exact component={LoginForm}/>
      <Route path="/send" exact component={MessageForm} />
      <Route path="/orders" exact component={ManageOrders} />
      <Route path="/orders/:id" component={ManageOrders} />
        <Route path="/nav" component={NavBar} />
        <Route path="/register" exact component={RegisterPage}/>
    </Switch>
  );
}

export default App;
