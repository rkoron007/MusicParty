import {connect} from "react-redux";
import SessionForm from "./session_form";
import { createNewUser } from "../../actions/user_actions";

const msp = (state) => {
  // debugger 
  return{
  formType: "Sign Up Now!",
  currentUser: state.entities.users[state.session.id]
  };
};

const mdp = (dispatch) => ({
  action: (user) => dispatch(createNewUser(user))
});

export default connect(msp, mdp)(SessionForm);