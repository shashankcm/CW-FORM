import TestSaga from "./testSaga";

export default function* AllSagas() {
  yield [TestSaga()];
}
