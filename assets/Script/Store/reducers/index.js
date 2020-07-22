import { combineReducers } from "redux";
import mainDataReducer from "./mainData";
import userInfoReducer from "./userInfo";

export default combineReducers({
  mainData: mainDataReducer,
  userInfo: userInfoReducer
})
