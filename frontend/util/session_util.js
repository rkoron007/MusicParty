import {axios} from "axios";

export const login = (user) => (
  axios({
    method: 'post',
    url: '/api/session',
    data: {user}
  })
);
  
export const logout = () => (
  axios({
    method: 'delete',
    url: '/api/session'
  })
);