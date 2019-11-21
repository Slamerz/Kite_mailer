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
} from '../actions/mail';

const initialState = {
  sentMail: [],
  drafts: [],
  currentMail: {},
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MAIL:
      return state;
    case CREATE_MAIL_SUCCESS:
      return state;
    case CREATE_MAIL_FAIL:
      return state;

    case GET_MAIL:
      return state;
    case GET_MAIL_SUCCESS:
      return state;
    case GET_MAIL_FAIL:
      return state;

    case UPDATE_MAIL:
      return state;
    case UPDATE_MAIL_SUCCESS:
      return state;
    case UPDATE_MAIL_FAIL:
      return state;

    default:
      return state;
  }
  return state;
};

export default mailReducer;
