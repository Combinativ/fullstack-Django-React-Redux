import { GET_ERRORS } from "./types";
//same principle as messagesAction
//errorReducer is connected with Alerts component
export const showError = (err) => {
	const errors = {
		//creating error payload
		msg: err.response.data,
		status: err.response.status,
	};
	//returns to errorReducer which handles the case of GET_ERRORS
	return {
		type: GET_ERRORS,
		payload: errors,
	};
};
