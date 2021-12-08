import { takeLatest, put, all, call } from "redux-saga/effects";

import UserActionTypes from "./user.types";

import {
  signinSuccess,
  signinFailure,
  signoutSuccess,
  signoutFailure,
  signupSuccess,
  signupFailure,
} from "./user.actions";

import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser,
} from "../../firebase/firebase.utils";

export function* getSnapshotFromUserAuth(userAuth, props) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth, props);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* signinWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle);
}

export function* signinWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* onEmailSigninStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGNIN_START, signinWithEmail);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signinFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signout() {
  try {
    yield auth.signOut();
    yield put(signoutSuccess());
  } catch (error) {
    yield put(signoutFailure(error));
  }
}

export function* onSignoutStart() {
  yield takeLatest(UserActionTypes.SIGNOUT_START, signout);
}

export function* signup({ payload: { displayName, email, password } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signupSuccess({ user, props: { displayName } }));
  } catch (error) {
    yield put(signupFailure(error));
  }
}

export function* postSignup({ payload: { user, props } }) {
  yield getSnapshotFromUserAuth(user, props);
}

export function* onSignupStart() {
  yield takeLatest(UserActionTypes.SIGNUP_START, signup);
}

export function* onSignupSuccess() {
  yield takeLatest(UserActionTypes.SIGNUP_SUCCESS, postSignup);
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
    call(onSignoutStart),
    call(onSignupStart),
    call(onSignupSuccess),
  ]);
}
