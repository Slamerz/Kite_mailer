import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  GET_ACCOUNT,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAIL,
  UPDATE_ACCOUNT,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_FAIL,
} from '../actions';

const initialState = {
  registerLoading: false,
  registerError: null,
  updateLoading: false,
  updateError: null,
  deleteLoading: false,
  deleteError: null,
  account: {},
  getAccountLoading: false,
  getAccountError: null,
  updateAccountLoading: false,
  updateAccountError: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registerLoading: true,
        registerError: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        registerLoading: false,
      };
    case REGISTER_FAIL:
      return {
        ...state,
        registerLoading: false,
        registerError: action.payload,
      };

    case GET_ACCOUNT:
      return {
        ...state,
        getAccountLoading: true,
        getAccountError: null,
      };
    case GET_ACCOUNT_SUCCESS:
      // need to know response object for correct use of payload
      return {
        ...state,
        getAccountLoading: false,
        account: action.payload,
      };
    case GET_ACCOUNT_FAIL:
      return {
        ...state,
        getAccountLoading: false,
        getAccountError: action.payload,
      };

    case UPDATE_ACCOUNT:
      return {
        ...state,
        updateLoading: true,
        updateError: null,
      };
    case UPDATE_ACCOUNT_SUCCESS:
      //Need to know response object for action.payload
      return {
        ...state,
        updateLoading: false,
        account: Object.assign({}, state.account, action.payload),
      };
    case UPDATE_ACCOUNT_FAIL:
      return {
        ...state,
        updateLoading: false,
        updateError: action.payload,
      };

    default:
      return state;
  }
};

export default accountReducer;
