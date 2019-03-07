import { all } from "redux-saga/effects";

import { completeReferralListDataSaga } from "./referralListSaga";
import { postCreateReferralSaga } from "./createReferralFormSaga";

export default function* AllSagas() {
  yield all([completeReferralListDataSaga(), postCreateReferralSaga()]);
}
