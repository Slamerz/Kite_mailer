//import { MAIL } from '../../data/dummy-data';
import {
  CREATE_DRAFT,
  CREATE_DRAFT_SUCCESS,
  CREATE_DRAFT_FAIL,
} from '../actions/mail';

const initialState = {
  sentMail: [],
  drafts: [],
  currentMail: {},
};

const mailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DRAFT:
      return state;
    default:
      return state;
  }
  return state;
};

export default mailReducer;
