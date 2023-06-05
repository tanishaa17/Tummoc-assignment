import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { loginReducer, registerReducer } from "./Reducers/user.reducer";

const reducer = combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = legacy_createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
