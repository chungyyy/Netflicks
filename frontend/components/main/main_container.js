import { connect } from 'react-redux';
import Main from './main';
import { logout } from '../../actions/session_actions';
import { fetchAllVideos, fetchVideo, fetchWatchListVideos } from '../../actions/video_actions';



const msp = (state, ownProps) => {
  const videos = Object.values(state.entities.videos);
  let watchmenId;
  let watchmenVideo;
  let watchmenVideoClip;
  for (let i = 0; i < videos.length; i++) {
    if (videos[i].title.toLowerCase().includes("watchmen")) {
      watchmenId = videos[i].id;
      watchmenVideo = videos[i];
      watchmenVideoClip = videos[i].video_clip;
      break;
    }
  };

  return {
    videos,
    watchmenId,
    watchmenVideo,
    watchmenVideoClip,
  };
};

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    fetchVideo: (id) => dispatch(fetchVideo(id)),
    fetchAllVideos: () => dispatch(fetchAllVideos()),
    fetchWatchListVideos: () => dispatch(fetchWatchListVideos())
  };
};

export default connect(msp, mdp)(Main);