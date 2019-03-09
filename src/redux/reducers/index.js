import { combineReducers } from "redux";

import referralList from "./referralListReducer";
import formList from "./formListReducer";
import createReferralForm from "./createReferralFormReducer";
import deleteReferralItem from "./deleteReferralListItemReducer";

const AllReducers = combineReducers({
  referralList,
  formList,
  createReferralForm,
  deleteReferralItem
});
export default AllReducers;
