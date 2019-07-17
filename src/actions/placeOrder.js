import {
  domain,
  handleJsonResponse,
  POST_ORDER_BEGIN,
  POST_ORDER_SUCCESS,
  POST_ORDER_FAIL
} from "./constants";

const url = domain + "/api/orders";

export const postOrderBegin = () => ({
  type: POST_ORDER_BEGIN
});

export const postOrderSuccess = order => ({
  type: POST_ORDER_SUCCESS,
  payload: { order }
});

export const postOrderFailure = error => ({
  type: POST_ORDER_FAIL,
  payload: { error }
});

export function placeOrder(data) {
  console.log(JSON.stringify(data));
  //TODO Remove hard coded senderId
  return dispatch => {
    dispatch(postOrderBegin());
    return fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, senderId: "5d1a29379765acd7a5fa8dbf" })
    })
      .then(handleErrors)
      .then(handleJsonResponse)
      .then(result => {
        console.log(result);
        dispatch(postOrderSuccess(result));
        return result;
      })
      .catch(err => {
        return dispatch(postOrderFailure(err));
      });
  };
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(response);
    throw Error(response.statusText);
  }
  return response;
}
