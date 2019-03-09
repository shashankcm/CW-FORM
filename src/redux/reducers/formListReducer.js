import {
  FORM_TEMPLATE_LIST_FETCHING,
  FORM_TEMPLATE_LIST_FETCHED,
  FORM_TEMPLATE_LIST_ERROR
} from "../constants/index";

const initialState = {
  loading: false,
  formList: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_TEMPLATE_LIST_FETCHING:
      return { ...state, loading: true, error: null };
    case FORM_TEMPLATE_LIST_FETCHED:
      return { ...state, formList: action.listData, loading: false };
    case FORM_TEMPLATE_LIST_ERROR:
      return {
        ...state,
        loading: false,
        formList: null,
        error: action.error
      };
    default:
      return state;
  }
};
