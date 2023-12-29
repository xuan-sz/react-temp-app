import {combineReducers} from "redux";
import SystemSetting from "./System";
import {connectRouter} from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  system: SystemSetting,
});

export default createRootReducer;
