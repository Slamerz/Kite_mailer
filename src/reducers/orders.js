import { ORDER_SUCCESS, ORDER_FAIL } from "../actions/placeOrder.js";

const initialState = {
  orders: [],
  order_fail: false,
  order_success: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_SUCCESS:
      return {
        orders: [...action.payload],
        order_fail: false,
        order_success: true
      };
    case ORDER_FAIL:
      return {
        orders: [state],
        order_fail: true,
        order_success: false
      };
    default:
      return state;
  }
};
