import {
  createUser,
  fetchUser,
  updateUser } from "../util/user_util";

import {receiveCurrentUser} from "./session_actions";

export const RECEIVE_USER = "RECEIVE_CURRENT_USER";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
});


export const receiveSingleUser = (user) => (dispatch) => (
  fetchUser(user).then(
  (res) => (dispatch(receiveUser(res.data.user)))
  )
);


export const createNewUser = (user) => (dispatch) => (
  createUser(user).then((user) => {
    return dispatch(receiveCurrentUser(user));
  })
);