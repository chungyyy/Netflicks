import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';
import { fetchAllVideos } from '../../actions/video_actions';

const msp = (state, ownProps) => {
  return {
    videos: Object.values(state.entities.videos),
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
  };
};

export default connect(msp, mdp)(Main);