import {AsyncStorage} from 'react-native';

import {domain, jsonHeaders, handleJsonResponse} from './constants';
import {getAccount} from './account';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

const url = domain + 'auth';

export const login = loginData => dispatch => {
  dispatch({
    type: LOGIN,
  });
  return fetch(url + '/login', {
    method: 'POST',
    headers: jsonHeaders,
    body: JSON.stringify(loginData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({type: LOGIN_FAIL, payload: err.message}));
    });
};

export const loginAndSaveLogin = loginData => (dispatch, getState) => {
  return dispatch(() => {
    return login(loginData);
  }).then(() => {
    const token = getState().auth.login.token;
    const userId = getState().auth.login.id;
    const expirationDate = new Date(
      new Date().getTime() + parseInt(getState().auth.login.exiresIn) * 1000,
    );
    return saveDataToStorage(token, userId, expirationDate);
  });
};

export const loginAndGetAccount = loginData => dispatch => {
  return dispatch(() => {
    return login(loginData);
  }).then(() => {
    return dispatch(getAccount());
  });
};

export const logout = () => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({
    type: LOGOUT,
  });

  return fetch(url + '/logout', {
    method: 'GET',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGOUT_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: LOGOUT_FAIL, payload: err.message}),
      );
    });
};

const saveDataToStorage = (token, userId, expirationDate) => {
  AsyncStorage.setItem(
    'userData',
    JSON.stringify({
      token: token,
      userId: userId,
      expirationDate: expirationDate.toISOString(),
    }),
  );
};