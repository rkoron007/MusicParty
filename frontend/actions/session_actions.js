import { login, logout } from "../util/session_util";


export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});


export const loginUser  = (user) => (dispatch) => {
  login(user).then((res) => {
    debugger
    return dispatch(res.data.user);
  });
};

export const logoutUser  = () => (dispatch) => {
  logout.then((res) => {
    debugger
    return dispatch(res.data.user);
  });
};



