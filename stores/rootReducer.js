import { combineReducers } from "redux";
import accountReducer from "./account/productReducer";

const appReducer = combineReducers({
  accountReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
