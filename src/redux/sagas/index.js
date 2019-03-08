import { all } from "redux-saga/effects";

import { completeReferralListDataSaga } from "./referralListSaga";
import { postCreateReferralSaga } from "./createReferralFormSaga";
import { deleteReferralSaga } from "./deleteReferralListItemSaga";

export default function* AllSagas() {
  yield all([
    completeReferralListDataSaga(),
    postCreateReferralSaga(),
    deleteReferralSaga()
  ]);
}
