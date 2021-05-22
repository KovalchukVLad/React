import axios from "axios";

let options = {
    baseURL: 'https://reqres.in'
}
let axiosInstance = axios.create(options);

const getUsers = (id) => {
    return axiosInstance('/api/users?page='+id)
}
// const getUser = (id) => {
//     return axiosInstance('/api/users/' +id)
// }

export {
    getUsers,
}