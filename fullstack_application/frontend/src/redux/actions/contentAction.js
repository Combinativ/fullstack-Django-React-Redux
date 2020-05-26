//actions for contents
import { GET_CONTENTS } from "./types";
import { DELETE_CONTENT } from "./types";
import { ADD_CONTENT } from "./types";
import axios from "axios";
const API_URL = "api/contents";
export const getContents = () => (dispatch) => {
	//Fetch content
	axios
		.get(API_URL)
		.then((res) => {
			//dispatch to reducer
			dispatch({
				type: GET_CONTENTS, //simple string constant of the same name
				payload: res.data, //sending response as payload
			});
		})
		.catch((err) => console.log());
};
//Delete content
export const deleteContent = (id) => (dispatch) => {
	axios
		.delete(API_URL + `/${id}/`) //sending delete request via URL param
		.then((res) => {
			//Dispatch to reducer
			dispatch({
				type: DELETE_CONTENT, //simple string constant of the same name
				payload: id, //sending the id that was deleted as response to the reducer
			});
		})
		.catch((err) => console.log());
};

//Add Content
export const addContent = (content) => (dispatch) => {
	//Fetch content
	axios
		.post(API_URL + `/`, content)
		.then((res) => {
			//dispatch to reducer
			dispatch({
				type: ADD_CONTENT, //simple string constant of the same name
				payload: res.data, //sending response as payload
			});
		})
		.catch((err) => console.log());
};
