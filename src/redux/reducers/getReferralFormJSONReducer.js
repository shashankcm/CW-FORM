import {
  GET_REFERRAL_FORM_JSON_FETCHING,
  GET_REFERRAL_FORM_JSON_FETCHED,
  GET_REFERRAL_FORM_JSON_ERROR
} from "../constants/index";

const initialState = {
  loading: null,
  getReferralFormJSON: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REFERRAL_FORM_JSON_FETCHING:
      return { ...state, loading: true, error: null };
    case GET_REFERRAL_FORM_JSON_FETCHED:
      return {
        ...state,
        getReferralFormJSON: action.getReferralFormJSONSuccessResponse,
        loading: false
      };
    case GET_REFERRAL_FORM_JSON_ERROR:
      return {
        ...state,
        loading: false,
        getReferralFormJSON: null,
        error: action.error
      };
    default:
      return state;
  }
};
