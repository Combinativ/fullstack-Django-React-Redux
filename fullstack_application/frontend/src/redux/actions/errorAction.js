import { GET_ERRORS } from "./types";
//same principle as messagesAction
export const showError = (err) => {
	const errors = {
		msg: err.response.data,
		status: err.response.status,
	};
	//returns to errorReducer which handles the case of GET_ERRORS
	return {
		type: GET_ERRORS,
		payload: errors,
	};
};
