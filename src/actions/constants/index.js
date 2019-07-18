//export const domain = "https://inmate-mailer.herokuapp.com";
 export const domain = "http://localhost:3007";
export const FETCH_ORDERS_BEGIN = "FETCH_ORDERS_BEGIN";
export const FETCH_ORDERS_SUCCESS = "FETCH_ORDERS_SUCCESS";
export const FETCH_ORDERS_FAILURE = "FETCH_ORDERS_FAILURE";
export const POST_ORDER_BEGIN = "POST_ORDER_BEGIN";
export const POST_ORDER_SUCCESS = "POST_ORDER_SUCCESS";
export const POST_ORDER_FAIL = "POST_ORDER_FAIL";
export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_ADDRESSEE = "UPDATE_ADDRESSEE";
export const UPDATE_PHOTOS = "UPDATE_PHOTOS";
export const POST_USER_BEGIN = "POST_USER_BEGIN";
export const POST_USER_SUCCESS = "POST_USER_SUCCESS";
export const POST_USER_FAILURE = "POST_USER_FAILURE";
export const POST_AUTH_BEGIN = "POST_AUTH_BEGIN";
export const POST_AUTH_SUCCESS = "POST_AUTH_SUCCESS";
export const POST_AUTH_FAILURE = "POST_AUTH_FAILURE";
export const jsonHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

export const handleJsonResponse = res => {
  if (res.ok) {
    return res.json();
  }
  return res.json().then(result => {
    throw result;
  });
};
