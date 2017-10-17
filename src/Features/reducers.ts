import { combineReducers } from "redux";
import app from "./App/AppRedux";
import user from "./User/UserRedux";

const rootReducer = combineReducers({
  app,
  user
});

export default rootReducer;