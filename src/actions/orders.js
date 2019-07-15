import {
  FETCH_ORDERS_BEGIN,
  FETCH_ORDERS_SUCCESS,
  FETCH_ORDERS_FAILURE,
  domain
} from "./constants";

export const fetchOrdersBegin = () => ({
  type: FETCH_ORDERS_BEGIN
});
export const fetchOrdersSuccess = orders => ({
  type: FETCH_ORDERS_SUCCESS,
  payload: { orders }
});
export const fetchOrdersFailure = error => ({
  type: FETCH_ORDERS_FAILURE,
  payload: { error }
});

export function fetchOrders() {
  return dispatch => {
    dispatch(fetchOrdersBegin());
    //TODO change to `orders` instead of `orders/` when backend is changed
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json);
        dispatch(fetchOrdersSuccess(json));
        return json;
      })
      .catch(error => {
        console.log(error);
        return dispatch(fetchOrdersFailure(error));
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
