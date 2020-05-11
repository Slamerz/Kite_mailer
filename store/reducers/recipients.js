import {
  CREATE_RECIPIENT,
  CREATE_RECIPIENT_SUCCESS,
  CREATE_RECIPIENT_FAIL,
  GET_RECIPIENTS,
  GET_RECIPIENTS_SUCCESS,
  GET_RECIPIENTS_FAIL,
  UPDATE_RECIPIENT,
  UPDATE_RECIPIENT_SUCCESS,
  UPDATE_RECIPIENT_FAIL,
} from '../actions';

const initialState = {
  recipients: [],
  currentRecipient: {},
  createRecipientsLoading: false,
  createRecipientsError: null,
  getRecipientsLoading: false,
  getRecipientsError: null,
  updateRecipientLoading: false,
  updateRecipientError: null,
};

const recipientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPIENT:
      return {
        ...state,
        createRecipientsLoading: true,
        createRecipientsError: null,
      };
    case CREATE_RECIPIENT_SUCCESS:
      // need to know response obj
      return {
        ...state,
        createRecipientsLoading: false,
        recipients: [...state.recipients, action.payload.recipient],
        currentRecipient: Object.assign(
          {},
          state.currentRecipient,
          action.payload,
        ),
      };
    case CREATE_RECIPIENT_FAIL:
      return {
        ...state,
        createRecipientsLoading: false,
        createRecipientsError: action.payload,
      };

    case GET_RECIPIENTS:
      return {
        ...state,
        getRecipientsLoading: true,
        getRecipientsError: null,
      };
    case GET_RECIPIENTS_SUCCESS:
      //need to know response object
      return {
        ...state,
        getRecipientsLoading: false,
        recipients: action.payload.recipients,
      };
    case GET_RECIPIENTS_FAIL:
      return {
        ...state,
        getRecipientsLoading: false,
        getRecipientsError: action.payload,
      };

    case UPDATE_RECIPIENT:
      return {
        ...state,
        updateRecipientLoading: true,
        updateRecipientError: null,
      };
    case UPDATE_RECIPIENT_SUCCESS:
      //need to know response obj
      const recipientsCopy = state.recipients.slice();
      const indexOfRecipient = state.recipients.findIndex(
        recipient => recipient.id === action.payload.recipient.id,
      );
      if (indexOfRecipient != -1) {
        recipientsCopy.splice(indexOfRecipient, 1, action.payload.recipient);
      }
      return {
        ...state,
        updateRecipientLoading: false,
        recipients: recipientsCopy,
      };
    case UPDATE_RECIPIENT_FAIL:
      return {
        ...state,
        updateRecipientLoading: false,
        updateRecipientError: action.payload,
      };

    default:
      return state;
  }
};

export default recipientsReducer;
