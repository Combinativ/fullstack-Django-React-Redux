//location of root reducer
import { combineReducers } from "redux";
import contentReducer from "./contentReducer";
import errorReducer from "./errorReducer";
import messageReducer from "./messageReducer";
export default combineReducers({
	contentReducer, //content reducer also has a state called contents
	errorReducer,
	messageReducer,
});
