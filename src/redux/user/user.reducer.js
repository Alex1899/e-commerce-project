import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  error: null,
  startSignin: false,
  startSignup: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.GOOGLE_SIGN_IN_START:
    case UserActionTypes.EMAIL_SIGN_IN_START:
      return {
        ...state,
        startSignin: true
      }

    case UserActionTypes.SIGN_UP_START:
      return {
        ...state,
        startSignup: true
      }

    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
        startSignin: false,
        startSignup: false
      };

    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };

    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
        startSignin: false,
        startSignup: false
      };

    default:
      return state;
  }
};

export default userReducer;
