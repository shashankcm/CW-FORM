import { combineReducers } from "redux";

import referralList from "./referralListReducer";
import createReferralForm from "./createReferralFormReducer";
import deleteReferralItem from "./deleteReferralListItemReducer";

const AllReducers = combineReducers({
  referralList,
  createReferralForm,
  deleteReferralItem
});
export default AllReducers;
