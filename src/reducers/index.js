import { combineReducers } from "redux";

import posts from "./posts";

// combine all the individual reducers
export default combineReducers({ posts: posts });
