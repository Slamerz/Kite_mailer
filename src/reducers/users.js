import {
  POST_USER_BEGIN,
  POST_USER_SUCCESS,
  POST_USER_FAILURE
} from "../actions/constants";

const initialState = {
  users: [],
        [{
            "id": "string",
            "username": "string",
            "email": "string",
            "password": "string",
            "users": [
              "string"
            ],
            "contacts": [
              "string"
            ]
          }
        ]
      }],
      
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_USER_BEGIN:
      return { ...state, loading: true, error: null };
    case POST_USER_SUCCESS:
      return { ...state, loading: false };
    case POST_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
          ...state,
          loading: false,
          error: action.payload.error,
          users: []
        };
    default:
      return state;
  }
};
