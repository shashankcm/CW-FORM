import { GET_REFERRAL_FORM_JSON_FETCHING } from "../constants/index";

export const getReferralFormJsonAction = getReferralFormJsonItem => {
  return {
    type: GET_REFERRAL_FORM_JSON_FETCHING,
    getReferralFormJsonItem
  };
};
