import { createStore, applyMiddleware } from "redux";
import createMiddleware from "redux-saga";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import { datas } from "./saga";

// saga file

const sagaMiddleware = createMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(datas);

export default store;
