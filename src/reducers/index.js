import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

// combine all the individual reducers
export default combineReducers({ posts: posts ,auth});
