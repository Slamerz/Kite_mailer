import {domain, jsonHeaders, handleJsonResponse} from './constants';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const UPDATE_ACCOUNT = 'UPDATE_ACCOUNT';
export const UPDATE_ACCOUNT_SUCCESS = 'UPDATE_ACCOUNT_SUCCESS';
export const UPDATE_ACCOUNT_FAIL = 'UPDATE_ACCOUNT_FAIL';

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const DELETE_ACCOUNT_SUCCESS = 'DELETE_ACCOUNT_SUCCESS';
export const DELETE_ACCOUNT_FAIL = 'DELETE_ACCOUNT_FAIL';

const url = domain + 'accounts';

export const register = registerData => dispatch => {
  dispatch({
    type: REGISTER,
  });
  return fetch(url, {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(registerData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: REGISTER_FAIL, payload: err.message}),
      );
    });
};

export const updateAccount = (userId, updateData) => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({type: UPDATE_ACCOUNT});

  return fetch(url + `/${userId}`, {
    method: 'PATCH',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
    body: JSON.stringify(updateData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_ACCOUNT_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: UPDATE_ACCOUNT_FAIL, payload: err.message}),
      );
    });
};

export const deleteAccount = userId => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({type: DELETE_ACCOUNT});

  return fetch(url + `/${userId}`, {
    method: 'DELETE',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_ACCOUNT_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: DELETE_ACCOUNT_FAIL, payload: err.message}),
      );
    });
};
