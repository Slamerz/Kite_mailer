import {domain, jsonHeaders, handleJsonResponse} from './constants';

export const CREATE_RECIPIENT = 'CREATE_RECIPIENT';
export const CREATE_RECIPIENT_SUCCESS = 'CREATE_RECIPIENT_SUCCESS';
export const CREATE_RECIPIENT_FAIL = 'CREATE_RECIPIENT_FAIL';

export const GET_RECIPIENTS = 'GET_RECIPIENTS';
export const GET_RECIPIENTS_SUCCESS = 'GET_RECIPIENTS_SUCCESS';
export const GET_RECIPIENTS_FAIL = 'GET_RECIPIENTS_FAIL';

export const UPDATE_RECIPIENT = 'UPDATE_RECIPIENT';
export const UPDATE_RECIPIENT_SUCCESS = 'UPDATE_RECIPIENT_SUCCESS';
export const UPDATE_RECIPIENT_FAIL = 'UPDATE_RECIPIENT_FAIL';

const url = domain + 'recipients';

export const createRecipient = recipientData => (dispatch, getState) => {
  const token = getState().auth.login.token;
  dispatch({type: CREATE_RECIPIENT});
  return fetch(url, {
    method: 'POST',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
    body: JSON.stringify(recipientData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: CREATE_RECIPIENT_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: CREATE_RECIPIENT_FAIL, payload: err.message}),
      );
    });
};

export const getRecipients = userId => dispatch => {
  dispatch({type: GET_RECIPIENTS});
  return fetch(url + `?userId=${userId}`, {
    method: 'GET',
    headers: jsonHeaders,
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GET_RECIPIENTS_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: GET_RECIPIENTS_FAIL, payload: err.message}),
      );
    });
};

export const updateRecipient = (recipientId, recipientData) => (
  dispatch,
  getState,
) => {
  const token = getState().auth.login.token;
  dispatch({type: UPDATE_RECIPIENT});

  return fetch(url + `/${recipientId}`, {
    method: 'PATCH',
    headers: {...jsonHeaders, Authorization: `Bearer ${token}`},
    body: JSON.stringify(recipientData),
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPDATE_RECIPIENT_SUCCESS,
        payload: result,
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({type: UPDATE_RECIPIENT_FAIL, payload: err.message}),
      );
    });
};
