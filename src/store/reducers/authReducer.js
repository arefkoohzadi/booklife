import {
  AUTH_SUCCESS,
  AUTH_START,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTH_ERROR_TO_NULL,
} from "../actions/auth";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_START:
      return { ...state, error: null, loading: true };
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      };
    case AUTH_FAIL:
      return { ...state, error: action.error, loading: false };
    case AUTH_ERROR_TO_NULL:
      return { ...state, error: null };
    case AUTH_LOGOUT:
      return { ...state, token: null, userId: null };

    default:
      return state;
  }
};
