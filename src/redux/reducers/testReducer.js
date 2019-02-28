import { TEST_SAGA } from "../constants/index";

const initialState = {
  test: ""
};

export default (state = initialState, action) => {
  let newState = Object.assign({}, state);

  switch (action.type) {
    case TEST_SAGA:
      newState["test"] = action.test;
      return newState;
    default:
      return state;
  }
};
