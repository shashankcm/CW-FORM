import { all } from "redux-saga/effects";

import { completeReferralListDataSaga } from "./referralListSaga";
import { completeFormTemplateListSaga } from "./formListSaga";
import { postCreateReferralSaga } from "./createReferralFormSaga";
import { deleteReferralSaga } from "./deleteReferralListItemSaga";
import { getReferralSaga } from "./getReferralFormJSONSaga";
export default function* AllSagas() {
  yield all([
    completeReferralListDataSaga(),
    completeFormTemplateListSaga(),
    postCreateReferralSaga(),
    deleteReferralSaga(),
    getReferralSaga()
  ]);
}
