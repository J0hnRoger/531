import { combineReducers } from "redux";
import app from "./App/AppRedux";
import users from "./User/UserRedux";

const rootReducer = combineReducers({
  app,
  users
});

export default rootReducer;