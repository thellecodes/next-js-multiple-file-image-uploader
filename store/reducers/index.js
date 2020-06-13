import { combineReducers } from "redux";

// COMBINED REDUCERS
import mediaReducer from "./mediaReducer";

export default combineReducers({
  media: mediaReducer,
});
