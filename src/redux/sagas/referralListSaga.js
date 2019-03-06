import { call, put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import { FORM_LIST_FETCHING, FORM_LIST_FETCHED, FORM_LIST_ERROR } from "../constants/index";


const url = "http://localhost:3003/api/formInstances";

const getCompletedReferralFormListData = () => {
  return axios.get(url, { crossdomain: true }
  ).then(res => res.data);
}

function* getCompletedReferralFormListSaga(action) {
  try {
    const listData = yield call(getCompletedReferralFormListData);
    yield put({ type: FORM_LIST_FETCHED, listData });
  } catch (error) {
    yield put({ type: FORM_LIST_ERROR, error });
  }
}

export function* completeReferralListDataSaga() {
  yield takeLatest(FORM_LIST_FETCHING, getCompletedReferralFormListSaga);
}

