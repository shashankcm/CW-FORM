import { CREATE_REFERRAL_POST_POSTING } from "../constants/index";

export const createReferralListAction = forminstance => {
  return {
    type: CREATE_REFERRAL_POST_POSTING,
    forminstance
  };
};
