import { CREATE_MESSAGE } from "./types";

//create message
export const createMessage = (msg) => {
	return {
		type: CREATE_MESSAGE,
		payload: msg,
	};
};
