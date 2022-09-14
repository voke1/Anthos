import { combineReducers } from "redux";
import productReducer from "./product/productReducer";

const appReducer = combineReducers({
  productReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
