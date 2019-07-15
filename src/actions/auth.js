import {
  POST_AUTH_BEGIN,
  POST_AUTH_SUCCESS,
  POST_AUTH_FAILURE,
  domain,
  jsonHeaders
} from "./constants";

export const postAuthBegin = () => ({
  type: POST_AUTH_BEGIN
});
export const postAuthSuccess = user => ({
  type: POST_AUTH_SUCCESS,
  payload: { user }
});
export const postAuthFailure = error => ({
  type: POST_AUTH_FAILURE,
  payload: { error }
});

export function postAuth(loginInfo) {
  return dispatch => {
    dispatch(postAuthBegin());

    return fetch(`${domain}/api/auth`, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(loginInfo)
    })
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(postAuthSuccess(json));
        console.log(json);
        return json;
      })
      .catch(error => {
        console.log(error);
        return dispatch(postAuthFailure(error));
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
