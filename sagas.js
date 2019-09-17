import { put, takeLatest, all } from "redux-saga/effects";
import api from "./api";

const delay = ms => new Promise(res => setTimeout(res, ms));

export function* helloSaga() {
  console.log("Hello Sagas!");
}

export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: "INCREMENT" });
}

export function* watchIncrementAsync() {
  yield takeLatest("INCREMENT_ASYNC", incrementAsync);
}

export function* getChamados() {
  try {
    const response = yield api.get("chamados");
    yield put({ type: "SUCCESS_CHAMADOS", payload: { data: response } });
  } catch (err) {
    console.log(err);
    yield put({ type: "FAILURE_CHAMADOS" });
  }
}

export function* watchGetChamados() {
  yield takeLatest("REQUEST_CHAMADOS", getChamados);
}

export default function* rootSaga() {
  yield all([helloSaga(), watchIncrementAsync(), watchGetChamados()]);
}
