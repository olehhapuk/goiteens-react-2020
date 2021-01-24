import axios from 'axios';

export function fetchAllUsers() {
  return axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data);
}

export function fetchUserById(id) {
  return axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.data);
}
