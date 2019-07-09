import { domain, handleJsonResponse } from "./constants";

export const ORDER_SUCCESS = "ORDER_SUCCESS";
export const ORDER_FAIL = "ORDER_FAIL";

const url = domain + "/api/orders";

export const placeOrder = data => dispatch => {
  console.log(JSON.stringify(data));
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
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
