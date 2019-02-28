import { TEST_SAGA } from "../constants/index";

const testSaga = () => {
  return {
    type: TEST_SAGA,
    test: "Hellow World"
  };
};

export default testSaga;
