import { combineReducers } from "redux";
import usersReducer from "./entities/user_reducer";


export default combineReducers({ users: usersReducer });