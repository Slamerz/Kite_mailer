import {domain, jsonHeaders, handleJsonResponse} from './constants';
import {login} from './auth';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';

export const GET_ACCOUNT = 'GET_ACCOUNT';
export const GET_ACCOUNT_SUCCESS = 'GET_ACCOUNT_SUCCESS';
export const GET_ACCOUNT_FAIL = 'GET_ACCOUNT_FAIL';

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

export const registerAndLoginAndGetAccount = registrationData => dispatch => {
  return dispatch(register(registrationData))
    .then(() => {
      return dispatch(
        login({
          email: registrationData.email,
          password: registrationData.password,
        }),
      );
    })
    .then(() => {
      return dispatch(getAccount());
    });
};

export const getAccount = () => (dispatch, getState) => {
  const id = getState().auth.login.id;
  dispatch({type: GET_ACCOUNT});

  return fetch(url + `/${id}`, {
    method: 'GET',
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_ACCOUNT_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: GET_ACCOUNT_FAIL, payload: err.message}),
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
