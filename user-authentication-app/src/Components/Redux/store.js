import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { userReducer } from "./Reducers/user.reducer";

const reducer = combineReducers({
  user: userReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
