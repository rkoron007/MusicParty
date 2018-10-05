import {axios} from "axios";

export const fetchUser = (id) => (
  axios.get(`users/${id}`)
);

export const createUser = (user) => (
  axios({
    method: 'post',
    url: '/users',
    data: {user}
  })
);

export const updateUser = (user) => (
  axios({
    method: 'patch',
    url: `/users/${user.id}`,
    data: {user}
  })
);