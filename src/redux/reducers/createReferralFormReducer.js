import {
  CREATE_REFERRAL_POST_POSTING,
  CREATE_REFERRAL_POST_POSTED,
  CREATE_REFERRAL_POST_ERROR
} from "../constants/index";

const initialState = {
  loading: false,
  createReferralFormResponse: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REFERRAL_POST_POSTING:
      return { ...state, loading: true, error: null };
    case CREATE_REFERRAL_POST_POSTED:
      return {
        ...state,
        createReferralFormResponse: action.createPostSuccessResponse,
        loading: false
      };
    case CREATE_REFERRAL_POST_ERROR:
      return {
        ...state,
        loading: false,
        createReferralFormResponse: null,
        error: action.error
      };
    default:
      return state;
  }
};
