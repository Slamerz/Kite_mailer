import {domain, jsonHeaders, handleJsonResponse} from './constants';

export const CREATE_MAIL = 'CREATE_MAIL';
export const CREATE_MAIL_SUCCESS = 'CREATE_MAIL_SUCCESS';
export const CREATE_MAIL_FAIL = 'CREATE_MAIL_FAIL';

export const GET_MAIL = 'GET_MAIL';
export const GET_MAIL_SUCCESS = 'GET_MAIL_SUCCESS';
export const GET_MAIL_FAIL = 'GET_MAIL_FAIL';

export const UPDATE_MAIL = 'UPDATE_MAIL';
export const UPDATE_MAIL_SUCCESS = 'UPDATE_MAIL_SUCCESS';
export const UPDATE_MAIL_FAIL = 'UPDATE_MAIL_FAIL';

export const DELETE_MAIL = 'DELETE_MAIL';
export const DELETE_MAIL_SUCCESS = 'DELETE_MAIL_SUCCESS';
export const DELETE_MAIL_FAIL = 'DELETE_MAIL_FAIL';

export const SAVE_MESSAGE = 'SAVE_MESSAGE';
export const SAVE_ORIENTATION = 'SAVE_ORIENTATION';

const url = domain + 'mail';

// temporary action to bypass backend
export const saveMessage = message => dispatch => {
  return dispatch({
    type: SAVE_MESSAGE,
    payload: message,
  });
};

export const setOrientation = isLandscape => dispatch => {
  return dispatch({
    type: SAVE_ORIENTATION,
    payload: isLandscape,
  });
};

export const createMail = mailData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({type: CREATE_MAIL});
  return fetch(url, {
    method: 'POST',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
    body: JSON.stringify(mailData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_MAIL_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: CREATE_MAIL_FAIL, payload: err.message}),
      );
    });
};

export const getMail = userId => dispatch => {
  dispatch({type: GET_MAIL});
  return fetch(url + `?userId=${userId}`, {
    method: 'GET',
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_MAIL_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: GET_MAIL_FAIL, payload: err.message}),
      );
    });
};

export const updateMail = (mailId, mailData) => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({type: UPDATE_MAIL});

  return fetch(url + `/${mailId}`, {
    method: 'PATCH',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
    body: JSON.stringify(mailData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_MAIL_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: UPDATE_MAIL_FAIL, payload: err.message}),
      );
    });
};

export const deleteMail = mailId => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({type: DELETE_MAIL});

  return fetch(url + `/${mailId}`, {
    method: 'DELETE',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETE_MAIL_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: DELETE_MAIL_SUCCESS, payload: err.message}),
      );
    });
};
