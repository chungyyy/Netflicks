import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';
import { fetchAllVideos } from '../../actions/video_actions';



const msp = (state, ownProps) => {
  const videos = Object.values(state.entities.videos);
  let watchmenId;
  let watchmenVideo;
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].title.toLowerCase().includes("watchmen")) {
      watchmenId = videos[i].id;
      watchmenVideo = videos[i];
      break;
    }
  };

  return {
    videos,
    watchmenId,
    watchmenVideo,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
  };
};

export default connect(msp, mdp)(Main);