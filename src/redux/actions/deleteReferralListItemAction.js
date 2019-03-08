import { DELETE_REFERRAL_LIST_ITEM_POSTING } from "../constants/index";

export const deleteReferralItemAction = deleteReferralItem => {
  return {
    type: DELETE_REFERRAL_LIST_ITEM_POSTING,
    deleteReferralItem
  };
};
