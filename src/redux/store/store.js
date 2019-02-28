import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";

import AllSagas from "../sagas";
import AllReducers from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();
/*eslint-disable */
const composeSetup =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;
/*eslint-enable */
const loggerMiddleware = createLogger({
  predicate: () => process.env.NODE_ENV === "development"
});
const store = createStore(
  AllReducers,
  composeSetup(applyMiddleware(sagaMiddleware, loggerMiddleware))
);

sagaMiddleware.run(AllSagas);

export default store;
