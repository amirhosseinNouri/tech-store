import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

const middlewares = [thunk];
// const enhancers = [applyMiddleware(...middlewares)];
const enhancers = [  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
   applyMiddleware(...middlewares)];

const store = createStore(rootReducer, compose(...enhancers));

export default store;
