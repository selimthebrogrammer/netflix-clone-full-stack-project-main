import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../store/reducers/userReducers";

const rootReducer = combineReducers({
  user: userReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
