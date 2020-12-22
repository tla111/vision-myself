import axios from 'axios';

const url = 'https://vision-myself.herokuapp.com';

export const fetchPosts = () => axios.get(`${url}/posts`);
export const createPost = (newPost) => axios.post(`${url}/posts`, newPost);
