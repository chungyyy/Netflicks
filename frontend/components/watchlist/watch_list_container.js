import { connect } from 'react-redux';
import { fetchWatchListVideos } from '../../actions/video_actions';
import Watchlist from './watch_list';

const msp = (state, ownProps) => {
  const watchlistVideos = Object.values(state.entities.watchlist);
  return {
    watchlistVideos,
  }
};

const mdp = (dispatch) => {
  return {
    fetchWatchListVideos: () => dispatch(fetchWatchListVideos())
  }
};

export default connect(msp, mdp)(Watchlist);