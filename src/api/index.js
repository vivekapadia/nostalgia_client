import axios from "axios";

const url = "http://localhost:5555/posts";

export const fetchPosts = () => axios.get(url);
