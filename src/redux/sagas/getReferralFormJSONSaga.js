import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  GET_REFERRAL_FORM_JSON_FETCHING,
  GET_REFERRAL_FORM_JSON_FETCHED,
  GET_REFERRAL_FORM_JSON_ERROR
} from "../constants/index";

const url = "http://localhost:3004/api/summary";

const getReferralFormAPICall = getReferralFormJson => {
  return axios
    .get(`${url}/${getReferralFormJson}`, { crossdomain: true })
    .then(res => res.data);
};

function* getReferralFormJsonSaga(action) {
  try {
    const { getReferralFormJsonItem } = action;
    const getReferralFormJSONSuccessResponse = yield call(
      getReferralFormAPICall,
      getReferralFormJsonItem
    );
    yield put({
      type: GET_REFERRAL_FORM_JSON_FETCHED,
      getReferralFormJSONSuccessResponse
    });
  } catch (error) {
    yield put({ type: GET_REFERRAL_FORM_JSON_ERROR, error });
  }
}

export function* getReferralSaga() {
  yield takeEvery(GET_REFERRAL_FORM_JSON_FETCHING, getReferralFormJsonSaga);
}

/* {
  params: {
    id: deleteReferralItem
  }
  headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Z-Key",
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
      }
}, */
