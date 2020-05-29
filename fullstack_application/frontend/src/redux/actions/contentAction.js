//actions for contents
import { GET_CONTENTS } from "./types";
import { DELETE_CONTENT } from "./types";
import { ADD_CONTENT } from "./types";
import { showError } from "./errorAction";
import { createMessage } from "./messagesAction";
import { tokenConfig } from "./authAction"; // helper method to get Tokenized axios config
import axios from "axios";

const API_URL = "api/contents";
export const getContents = () => (dispatch, getState) => {
	//Fetch content
	axios
		.get(API_URL, tokenConfig(getState)) //every auth endpoint needs tokenConfig
		.then((res) => {
			//dispatch to reducer
			dispatch({
				type: GET_CONTENTS, //simple string constant of the same name
				payload: res.data, //sending response as payload
			});
		})
		.catch((err) => dispatch(showError(err)));
};
//Delete content
export const deleteContent = (id) => (dispatch, getState) => {
	axios
		.delete(API_URL + `/${id}/`, tokenConfig(getState)) //sending delete request via URL param
		.then((res) => {
			//call to messageReducer to show alert
			dispatch(createMessage({ deleteContent: "Content deleted !" })); //createMessage({<msg_identifier>:<"msg_body">})
			//Dispatch to reducer
			dispatch({
				type: DELETE_CONTENT, //simple string constant of the same name
				payload: id, //sending the id that was deleted as response to the reducer
			});
		})
		.catch((err) => dispatch(showError(err)));
};

//Add Content
export const addContent = (content) => (dispatch, getState) => {
	//Fetch content
	axios
		.post(API_URL + `/`, content, tokenConfig(getState))
		.then((res) => {
			// call for messageReducer to show alert
			dispatch(createMessage({ addedContent: "Content Added !" })); //createMessage({<msg_identifier>:<"msg_body">})
			//dispatch to reducer
			dispatch({
				type: ADD_CONTENT, //simple string constant of the same name
				payload: res.data, //sending response as payload
			});
		})
		.catch((err) => dispatch(showError(err)));
};
