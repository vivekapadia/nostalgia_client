import * as api from "../api/index.js";

// Action Creators
// also the dispatch is coming from redux-thunk which was used in src/index.js to create the store
// for error handling we use try catch block

export const getPosts = () => async (dispatch) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({ type: "FETCH_ALL", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const createPost = (post) => async (dispatch) => {
	try {
		const { data } = await api.createPost(post);

		dispatch({ type: "CREATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};

export const updatePost = (id, post) => async (dispatch) => {
	try {
		const { data } = await api.updatePost(id, post);

		dispatch({ type: "UPDATE", payload: data });
	} catch (error) {
		console.log(error.message);
	}
};
