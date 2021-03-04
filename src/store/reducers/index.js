import authReducer from "./auth";
// import userReducer from "./user";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authReducer,
  // userReducer,
});

export default allReducers;
