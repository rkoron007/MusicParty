import merge from 'lodash/merge';
import { RECEIVE_USER } from "../../actions/user_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";


export default (state={}, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser});
    default:
      return state;
  }
};