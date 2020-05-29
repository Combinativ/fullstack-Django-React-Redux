import axios from "axios";
import { showError } from "./errorAction";
import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";

//check token and load user

export const loadUser = () => (dispatch, getState) => {
	//User Loading
	dispatch({ type: USER_LOADING });

	//GetToken from state
	const token = getState().authReducer.token;

	//Headers
	const config = {
		header: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to headers config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	}

	axios
		.get("/api/auth/user", config)
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			console.log("halp");

			dispatch(showError(err));
			dispatch({ type: AUTH_ERROR });
		});
};
