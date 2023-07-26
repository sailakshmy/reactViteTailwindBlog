import axios from 'axios';

const BASE_URL='https://jsonplaceholder.typicode.com';

const getPost = axios.get(BASE_URL+'/posts');
const getCoverImage = axios.get(BASE_URL+'/photos');
const getUsers = axios.get(BASE_URL+'/users');

export default {
    getPost,
    getCoverImage,
    getUsers
}