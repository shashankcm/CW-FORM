import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { TEST_SAGA } from "../constants/index";

function testApi(test) {
  return test;
}

function* testFlow(action) {
  console.log(action, "action");
  try {
    const { test } = action;
    const response = yield call(testApi, test);
    console.log(response, "action_response");
    yield put({ type: TEST_SAGA, response });
  } catch (error) {
    //yield put({ type: TEST_ERROR, error });
    //yeild console.log("Error in testSaga.js");
    console.log(error, "action_error");
  }
}

function* testWatcher() {
  yield takeEvery(TEST_SAGA, testFlow);
}

export default testWatcher;
