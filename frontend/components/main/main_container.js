import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';
import { fetchAllVideos } from '../../actions/video_actions';



const msp = (state, ownProps) => {
  const videos = Object.values(state.entities.videos);
  let watchmenId;
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].title.toLowerCase().includes("watchmen")) {
      watchmenId = videos[i].id;
      break;
      debugger
    }
  };

  return {
    videos,
    watchmenId,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
  };
};

export default connect(msp, mdp)(Main);