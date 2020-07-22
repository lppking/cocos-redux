import { createStore } from "redux";
import reducers from "./reducers/index";

const state = {
  mainData: {},
  userInfo: {}
}

const store = createStore(reducers, state);

export default store;