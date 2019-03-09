import { combineReducers } from "redux";

import referralList from "./referralListReducer";
import formList from "./formListReducer";
import createReferralForm from "./createReferralFormReducer";
import deleteReferralItem from "./deleteReferralListItemReducer";
import { reducer as reduxFormReducer } from "redux-form";
import getReferralFormJSON from "./getReferralFormJSONReducer";

const AllReducers = combineReducers({
  form: reduxFormReducer,
  referralList,
  formList,
  createReferralForm,
  deleteReferralItem,
  getReferralFormJSON
});
export default AllReducers;
