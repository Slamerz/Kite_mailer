import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import orders from "./orders";
import formData from "./formData";

export default history =>
  combineReducers({
    router: connectRouter(history),
    orders,
    formData
  });
