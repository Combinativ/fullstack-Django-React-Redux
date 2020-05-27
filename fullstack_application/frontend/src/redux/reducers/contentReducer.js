import { GET_CONTENTS } from "../actions/types";
import { DELETE_CONTENT } from "../actions/types";
import { ADD_CONTENT } from "../actions/types";

const initialState = {
	contents: [],
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CONTENTS:
			return {
				...state,
				contents: action.payload, //setting payload from action response
			};
		case DELETE_CONTENT:
			return {
				...state,
				//filtering contents state as to return the state with filtering out the content via id that was deleted
				contents: state.contents.filter(
					(content) => content.id !== action.payload
				),
			};
		case ADD_CONTENT:
			return {
				...state,
				//Appending new payload with existing state.contents
				contents: [...state.contents, action.payload],
			};
		default:
			return state;
	}
}
