import {takeEvery, call, put } from "@redux-saga/core/effects";
import axios from "axios";
import { FETCH_POSTS_REQUEST } from "../posts/postTypes";
import { fetchUsersSuccess, fetchUsersFailure } from "../posts/postActions";

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    const response = yield call(() => axios.get(apiEndPoint));
    yield put(fetchUsersSuccess(response.data));
  } catch (e) {
    yield put(fetchUsersFailure(e.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPost);
}
