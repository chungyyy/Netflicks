import { connect } from 'react-redux';
import { fetchVideo } from '../../actions/video_actions';
import Watch from './watch';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.video_id
  const video = state.entities.videos[videoId]
  return {
    video,
    videoId,
  }
};

const mdp = (dispatch) => {
  return {
    fetchVideo: (id) => dispatch(fetchVideo(id)),
  }
};

export default connect(msp, mdp)(Watch);