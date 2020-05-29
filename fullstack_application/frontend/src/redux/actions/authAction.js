import axios from "axios";
import { showError } from "./errorAction";
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
} from "./types";

const API_URL = "/api/auth/";
//check token and load user
export const loadUser = () => (dispatch, getState) => {
	//User Loading
	dispatch({ type: USER_LOADING });

	//GetToken from state
	const token = getState().authReducer.token;

	//Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};

	// If token, add to headers config
	if (token) {
		config.headers["Authorization"] = `Token ${token}`;
	}
	// let config2 = {
	// 	headers: {
	// 		"Content-Type": "application/json",
	// 		Authorization: `Token ${token}`,
	// 	},
	// };
	axios
		.get("/api/auth/user", config)
		.then((res) => {
			dispatch({
				type: USER_LOADED,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(showError(err));
			dispatch({ type: AUTH_ERROR });
		});
};

//Login User
export const login = (username, password) => (dispatch) => {
	//Headers
	const config = {
		header: {
			"Content-Type": "application/json",
		},
	};
	//Request body
	let body = { username, password };
	axios
		.post("/api/auth/login", body)
		.then((res) => {
			dispatch({
				type: LOGIN_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(showError(err));
			dispatch({ type: LOGIN_FAIL });
		});
};
