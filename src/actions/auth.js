import { AUTH } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const signin = (formData, navigate) => async (dispatch) => {
	try {
		// login in to user

		navigate("/");
	} catch (error) {
		console.log(error);
	}
};

export const signup = (formData, navigate) => async (dispatch) => {
	try {
		// sign up the user

		navigate("/");
	} catch (error) {
		console.log(error);
	}
};
