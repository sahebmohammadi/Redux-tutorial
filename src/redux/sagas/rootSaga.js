import { all } from "redux-saga/effects";
import { watchFetchPost } from "./postSaga";

export function* rootSaga() {
  yield all([watchFetchPost()]);
}
