import axios from "axios";

let options = {
    baseURL: 'https://jsonplaceholder.typicode.com'
}
let axiosInstance = axios.create(options);

const getUsers = () => {
    return axiosInstance.get('/users');
}

const getUser = (id) => {
    return axiosInstance.get('/users'+id);
}

const getPosts = () => {
    return axiosInstance.get('/posts');
}

export {
    getUsers, getUser, getPosts
}