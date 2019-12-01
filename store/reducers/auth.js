import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  DELETE_ACCOUNT,
  DELETE_ACCOUNT_SUCCESS,
  DELETE_ACCOUNT_FAIL,
} from '../actions';

const initialState = {
  loginLoading: false,
  login: null,
  loginError: null,

  logoutLoading: false,
  logoutError: null,

  deleteAccountLoading: false,
  deleteAccountError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginLoading: true,
        loginError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        login: action.payload,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loginLoading: false,
        loginError: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        logoutLoading: true,
        logoutError: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        login: null,
      };
    case LOGOUT_FAIL:
      return {
        ...state,
        logoutLoading: false,
        logoutError: action.payload,
      };

    case DELETE_ACCOUNT:
      return {
        ...state,
        deleteAccountLoading: true,
        deleteAccountError: null,
      };
    case DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        deleteAccountLoading: false,
        login: null,
      };
    case DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        deleteAccountLoading: false,
        deleteAccountError: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
