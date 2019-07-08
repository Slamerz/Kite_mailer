// import { store } from "../index";
import { domain, jsonHeaders, handleJsonResponse } from "./constants/index";

export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAIL = "ORDER_FAIL";

const url = domain + "/api/orders";

export const placeOrder = data => dispatch => {
  return fetch(url, {
    method: "POST",
    headers: { ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ORDER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return dispatch({ type: ORDER_FAIL, payload: err.message });
    });
};
