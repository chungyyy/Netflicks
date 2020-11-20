import { connect } from 'react-redux';
import { fetchSearchedVideos } from '../../actions/video_actions';
import Search from './search';

const msp = (state, ownProps) => {
  const searchedVideos = Object.values(state.entities.searchedVideos);
  return {
    searchedVideos,
  }
};

const mdp = (dispatch) => {
  return {
    fetchSearchedVideos: (query) => dispatch(fetchSearchedVideos(query)),
  }
};

export default connect(msp, mdp)(Search);