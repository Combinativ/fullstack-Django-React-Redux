import { CREATE_MESSAGE } from "../actions/types";
const initialState = {};
export default function (state = initialState, action) {
	console.log(CREATE_MESSAGE, "=", action.type);

	switch (action.type) {
		case CREATE_MESSAGE:
			return (state = action.payload);
		default:
			return state;
	}
}
