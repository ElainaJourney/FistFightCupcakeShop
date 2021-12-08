import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearBag } from "./bag.actions";

export function* clearBagOnSignout() {
  yield put(clearBag());
}

export function* onSignoutSuccess() {
  yield takeLatest(UserActionTypes.SIGNOUT_SUCCESS, clearBagOnSignout);
}

export function* bagSagas() {
  yield all([call(onSignoutSuccess)]);
}
