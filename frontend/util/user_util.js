// import {axios} from "axios";

export const fetchUser = (id) => (
  $.ajax({method:'get', url: `users/${id}`})
);

export const createUser = (user) => {
  return $.ajax({
    method: 'post',
    url: '/api/users',
    data: {user}
  });
};

export const updateUser = (user) => (
  axios({
    method: 'patch',
    url: `/users/${user.id}`,
    data: {user}
  })
);