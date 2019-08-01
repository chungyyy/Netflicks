import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout , signup } from '../../actions/session_actions';

const msp = (state) => {
  const userId = state.session.id;
  const user = state.entities.users[userId];
  return {
    currentUser: user,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    login: (user) => dispatch(login(user)),
  };
};

export default connect(msp, mdp)(Greeting);