import { combineReducers } from "redux";
import orders from "./orders";

export default history =>
  combineReducers({
    orders
  });
