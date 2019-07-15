import {
  POST_USER_BEGIN,
  POST_USER_SUCCESS,
  POST_USER_FAILURE,
  domain,
  jsonHeaders
} from "./constants";

import { postAuth } from "./auth";

export const postUserBegin = () => ({
  type: POST_USER_BEGIN
});
export const postUserSuccess = user => ({
  type: POST_USER_SUCCESS,
  payload: { user }
});
export const postUserFailure = error => ({
  type: POST_USER_FAILURE,
  payload: { error }
});

export function postUser(user) {
  const newUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    password: user.password
  };
  return dispatch => {
    dispatch(postUserBegin());
    return fetch(`${domain}/api/users`, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(newUser)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(postUserSuccess(json));
      })
      .then(user => {
        postAuth({ email: newUser.email, password: newUser.password });
      })
      .catch(error => {
        console.log(error);
        return dispatch(postUserFailure(error));
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
