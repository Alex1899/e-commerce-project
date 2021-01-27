import UserActionTypes from "./user.types";


export const googleSignInStart = () => ({
  type: UserActionTypes.GOOGLE_SIGN_IN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword,
});

export const signInSuccess = (user) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (err) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: err,
});

export const signOutStart = () =>({
  type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (e) => ({
  type: UserActionTypes.SIGN_OUT_FAILURE,
  payload: e
})

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION
})

export const signUpStart = (userDetails) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: userDetails
})

export const signUpSuccess = (user) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: user
})

export const signUpFailure = (e) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: e
})

