import { FORM_LIST_FETCHING, FORM_LIST_FETCHED, FORM_LIST_ERROR } from "../constants/index";

const initialState = {
  loading: false,
  refferalList: null,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_LIST_FETCHING:
      return { ...state, loading: true, error: null }
    case FORM_LIST_FETCHED:
      return { ...state, refferalList: action.listData, loading: false }
    case FORM_LIST_ERROR:
      return { ...state, loading: false, refferalList: null, error: action.error }
    default:
      return state;
  }
};
