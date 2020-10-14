import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import dataReducer from "./reduxReducers/dataReducer";
import uiReducer from "./reduxReducers/uiReducer";

const state = {};

const middleWare = [thunk];

const reducers = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  state,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
