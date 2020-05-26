//actions for contents
import { GET_CONTENTS } from "./types";
import { DELETE_CONTENT } from "./types";
import axios from "axios";
export const getContents = () => (dispatch) => {
	const API_URL = "api/contents";
	//Add content
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
	const API_URL = "api/contents";
	//Add content
	axios
		.delete(API_URL + `/${id}/`)
		.then((res) => {
			//Dispatch to reducer
			dispatch({
				type: DELETE_CONTENT, //simple string constant of the same name
				payload: id, //sending the id that was deleted as response to the reducer
			});
		})
		.catch((err) => console.log());
};
