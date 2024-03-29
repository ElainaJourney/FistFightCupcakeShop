import UserActionTypes from "./user.types";

export const googleSigninStart = () => ({
  type: UserActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSigninStart = (emailAndPassword) => ({
  type: UserActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});

export const signinSuccess = (user) => ({
  type: UserActionTypes.SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = (error) => ({
  type: UserActionTypes.SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: UserActionTypes.CHECK_USER_SESSION,
});

export const signoutStart = () => ({
  type: UserActionTypes.SIGNOUT_START,
});

export const signoutSuccess = () => ({
  type: UserActionTypes.SIGNOUT_SUCCESS,
});

export const signoutFailure = (error) => ({
  type: UserActionTypes.SIGNOUT_FAILURE,
  payload: error,
});

export const signupStart = (user) => ({
  type: UserActionTypes.SIGNUP_START,
  payload: user,
});

export const signupSuccess = ({ user, props }) => ({
  type: UserActionTypes.SIGNUP_SUCCESS,
  payload: { user, props },
});

export const signupFailure = (error) => ({
  type: UserActionTypes.SIGNUP_FAILURE,
  payload: error,
});
