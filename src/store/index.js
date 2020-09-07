import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";
import authReducer from "./reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReduser = combineReducers({
  book: bookReducer,
  author: authorReducer,
  auth: authReducer,
});

const store = createStore(
  rootReduser,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
