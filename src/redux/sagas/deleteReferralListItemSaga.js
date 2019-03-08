import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
  DELETE_REFERRAL_LIST_ITEM_POSTING,
  DELETE_REFERRAL_LIST_ITEM_POSTED,
  DELETE_REFERRAL_LIST_ITEM_ERROR
} from "../constants/index";

const url = "http://localhost:3003/api/formInstance";

const deleteReferralListItem = deleteReferralItem => {
  return axios
    .delete(`${url}/${deleteReferralItem}`, { crossdomain: true })
    .then(res => res.data);
};

function* deleteReferralListItemSaga(action) {
  try {
    const { deleteReferralItem } = action;
    const deleteReferralItemSuccessResponse = yield call(
      deleteReferralListItem,
      deleteReferralItem
    );
    yield put({
      type: DELETE_REFERRAL_LIST_ITEM_POSTED,
      deleteReferralItemSuccessResponse
    });
  } catch (error) {
    yield put({ type: DELETE_REFERRAL_LIST_ITEM_ERROR, error });
  }
}

export function* deleteReferralSaga() {
  yield takeEvery(
    DELETE_REFERRAL_LIST_ITEM_POSTING,
    deleteReferralListItemSaga
  );
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
