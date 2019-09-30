import { connect } from 'react-redux';
import { fetchSearchedVideos, clearSearchedVideos } from '../../actions/video_actions';
import Header from './header';

const msp = (state, ownProps) => {
  const searchedVideos = Object.values(state.entities.searchedVideos);
  return {
    searchedVideos,
  }
};

const mdp = (dispatch) => {
  return {
    fetchSearchedVideos: (query) => dispatch(fetchSearchedVideos(query)),
    clearSearchedVideos: () => dispatch(clearSearchedVideos()),
  }
};

export default connect(msp, mdp)(Header);