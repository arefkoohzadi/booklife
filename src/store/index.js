import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import bookReducer from "./reducers/bookReducer";
import authorReducer from "./reducers/authorReducer";

const rootReduser = combineReducers({
  book: bookReducer,
  author: authorReducer,
});

const store = createStore(rootReduser, applyMiddleware(thunk));

export default store;
