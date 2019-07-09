import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import orders from "./orders";

export default history =>
  combineReducers({
    router: connectRouter(history),
    orders
  });
