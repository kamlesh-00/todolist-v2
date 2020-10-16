import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reduxReducers/dataReducer";

const state = {};

const middleWare = [thunk];

const reducers = combineReducers({
  data: dataReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  state,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
