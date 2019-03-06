import { all } from 'redux-saga/effects';

import { completeReferralListDataSaga } from "./referralListSaga";


export default function* AllSagas() {
  yield all([completeReferralListDataSaga()]);
}
