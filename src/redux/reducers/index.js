import { combineReducers } from "redux";

import referralList from "./referralListReducer";
import createReferralForm from "./createReferralFormReducer";

const AllReducers = combineReducers({
  referralList,
  createReferralForm
});
export default AllReducers;
