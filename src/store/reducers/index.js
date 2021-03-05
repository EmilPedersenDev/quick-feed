import authReducer from "./auth";
import teamReducer from "./team";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  authReducer,
  teamReducer,
});

export default allReducers;
