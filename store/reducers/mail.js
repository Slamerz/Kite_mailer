//import { MAIL } from '../../data/dummy-data';
import {
  CREATE_MAIL,
  CREATE_MAIL_SUCCESS,
  CREATE_MAIL_FAIL,
  GET_MAIL,
  GET_MAIL_SUCCESS,
  GET_MAIL_FAIL,
  UPDATE_MAIL,
  UPDATE_MAIL_SUCCESS,
  UPDATE_MAIL_FAIL,
  DELETE_MAIL,
  DELETE_MAIL_SUCCESS,
  DELETE_MAIL_FAIL,
  SAVE_MESSAGE,
} from '../actions';

const initialState = {
  message: '',
  createMailLoading: false,
  createMailError: null,
  getMailLoading: false,
  getMailError: null,
  updateMailLoading: false,
  updateMailError: null,
  deleteMailLoading: false,
  deleteMailError: null,
  allMail: [],
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case CREATE_MAIL:
      return {
        ...state,
        createMailLoading: true,
        createMailError: null,
      };
    case CREATE_MAIL_SUCCESS:
      // need to know response object
      return {
        ...state,
        createMailLoading: false,
        allMail: [...state.allMail, action.payload],
      };
    case CREATE_MAIL_FAIL:
      return {
        ...state,
        createMailLoading: false,
        createMailError: action.payload,
      };

    case GET_MAIL:
      return {
        ...state,
        getMailLoading: true,
        getMailError: null,
      };
    case GET_MAIL_SUCCESS:
      // need to know response object
      return {
        ...state,
        getMailLoading: false,
        allMail: action.payload,
      };
    case GET_MAIL_FAIL:
      return {
        ...state,
        getMailLoading: false,
        getMailError: action.payload,
      };

    case UPDATE_MAIL:
      return {
        ...state,
        updateMailLoading: true,
        updateMailError: null,
      };
    case UPDATE_MAIL_SUCCESS:
      //need to know response object
      const mailCopy = state.allMail.slice();
      const indexOfUpdatedMail = state.allMail.findIndex(
        mailObj => mailObj.id === action.payload.mail.id,
      );
      if (indexOfUpdatedMail != -1) {
        mailCopy.splice(indexOfUpdatedMail, 1, action.payload.mail);
      }
      return {
        ...state,
        updateMailLoading: false,
        allMail: mailCopy,
      };
    case UPDATE_MAIL_FAIL:
      return {
        ...state,
        updateMailLoading: false,
        updateMailError: action.payload,
      };

    case DELETE_MAIL:
      return {
        ...state,
        deleteMailLoading: true,
        deleteMailError: null,
      };
    case DELETE_MAIL_SUCCESS:
      //need to know response obj
      const remainingMail = state.allMail.filter(
        mail => mail.id != action.payload.mail.id,
      );
      return {
        ...state,
        deleteMailLoading: false,
        allMail: remainingMail,
      };
    case DELETE_MAIL_FAIL:
      return {
        ...state,
        deleteMailLoading: false,
        deleteMailError: action.payload,
      };

    default:
      return state;
  }
};

export default mailReducer;
