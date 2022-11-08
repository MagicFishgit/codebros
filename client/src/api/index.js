import axios from 'axios';

//Define url that points to backend route.
const url = "http://localhost:5000/posts"

//Define function that retrieves posts from backend.
export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);