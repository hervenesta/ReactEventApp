import { combineReducers } from "redux";
import EventReducer from "./EventReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  event: EventReducer,
  errors: errorReducer
});
