import axios from "axios";
import { showError } from "./errorAction";
import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from "./types";

const API_URL = "/api/auth/";
//CHECK TOKEN AND LOAD USER
export const loadUser = () => (dispatch, getState) => {
	//User Loading
	dispatch({ type: USER_LOADING });
	axios
		.get(API_URL + "user", tokenConfig(getState))
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
export const login = (email, password) => (dispatch) => {
	//Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	//Request body
	let body = { email, password };
	axios
		.post(API_URL + "login", body)
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
//REGISTER USER
export const register = ({ username, password, email }) => (dispatch) => {
	//Headers
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	//Request body
	let body = { username, password, email };
	axios
		.post(API_URL + "register", body)
		.then((res) => {
			dispatch({
				type: REGISTER_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(showError(err));
			dispatch({ type: REGISTER_FAIL });
		});
};

//LOGOUT USER
export const logout = () => (dispatch, getState) => {
	axios
		.post(API_URL + "logout", null, tokenConfig(getState))
		.then((res) => {
			dispatch({
				type: LOGOUT_SUCCESS,
				payload: res.data,
			});
		})
		.catch((err) => {
			dispatch(showError(err));
		});
};

//Setup config with Token -helper function
export const tokenConfig = (getState) => {
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
	return config;
};
