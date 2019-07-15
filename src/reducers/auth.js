import {
  POST_AUTH_BEGIN,
  POST_AUTH_SUCCESS,
  POST_AUTH_FAILURE
} from "../actions/constants";

const initialState = {
  user: {},
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_AUTH_BEGIN:
      return { ...state, loading: true, error: null };
    case POST_AUTH_SUCCESS:
      return { ...state, loading: false, user: action.payload.user };
    case POST_AUTH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        user: {}
      };
    default:
      return state;
  }
};
