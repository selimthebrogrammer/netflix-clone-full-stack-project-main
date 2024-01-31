import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,
  USER_LOGOUT
} from "../actions/userActions";

const initialState = {
  loading: false,
  user: null,
  error: null
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP_REQUEST:
    case USER_LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case USER_SIGNUP_SUCCESS:
    case USER_LOGIN_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case USER_SIGNUP_FAILURE:
    case USER_LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...state, user: null, error: null };
    default:
      return state;
  }
};
