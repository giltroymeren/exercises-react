import { combineReducers } from "redux";
import authReducer from "./authReducer";
import commentReducer from "./commentReducer";

export default combineReducers({
  comments: commentReducer,
  auth: authReducer
})