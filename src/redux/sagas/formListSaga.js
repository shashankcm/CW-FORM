import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  FORM_TEMPLATE_LIST_FETCHING,
  FORM_TEMPLATE_LIST_FETCHED,
  FORM_TEMPLATE_LIST_ERROR
} from "../constants/index";

const url = "http://localhost:3003/api/forms";

const getCompletedFormListData = () => {
  return axios.get(url, { crossdomain: true }).then(res => res.data);
};

function* getCompletedFormListSaga(action) {
  try {
    const listData = yield call(getCompletedFormListData);
    yield put({ type: FORM_TEMPLATE_LIST_FETCHED, listData });
  } catch (error) {
    yield put({ type: FORM_TEMPLATE_LIST_ERROR, error });
  }
}

export function* completeFormTemplateListSaga() {
  yield takeLatest(FORM_TEMPLATE_LIST_FETCHING, getCompletedFormListSaga);
}
