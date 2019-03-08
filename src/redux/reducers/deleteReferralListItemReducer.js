import {
  DELETE_REFERRAL_LIST_ITEM_POSTING,
  DELETE_REFERRAL_LIST_ITEM_POSTED,
  DELETE_REFERRAL_LIST_ITEM_ERROR
} from "../constants/index";

const initialState = {
  loading: null,
  deleteReferralFormResponse: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DELETE_REFERRAL_LIST_ITEM_POSTING:
      return { ...state, loading: true, error: null };
    case DELETE_REFERRAL_LIST_ITEM_POSTED:
      return {
        ...state,
        deleteReferralFormResponse: action.deleteReferralItemSuccessResponse,
        loading: false
      };
    case DELETE_REFERRAL_LIST_ITEM_ERROR:
      return {
        ...state,
        loading: false,
        deleteReferralFormResponse: null,
        error: action.error
      };
    default:
      return state;
  }
};
