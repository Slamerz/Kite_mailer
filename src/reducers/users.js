import {
    FETCH_USERS_BEGIN,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
  } from "../actions/constants";
  
  const initialState = {
    users: [{
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
      case FETCH_USERS_BEGIN:
        return { ...state, loading: true, error: null };
      case FETCH_USERS_SUCCESS:
        return { ...state, loading: false, users: [...state.users, ...action.payload.orders] };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          users: []
        };
      default:
        return state;
    }
  };