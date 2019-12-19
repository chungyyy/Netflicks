import { connect } from 'react-redux';
import VideoRowItem from './video_row_item';
import { addWatchListVideo, deleteWatchListVideo, fetchWatchListVideos } from '../../actions/video_actions';



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

const mdp = (dispatch) => {
  return {
    fetchWatchListVideos: () => dispatch(fetchWatchListVideos()),
    addWatchListVideo: () => dispatch(addWatchListVideo(id)),
    deleteWatchListVideo: () => dispatch(deleteWatchListVideo(id)),
  };
};

export default connect(msp, mdp)(VideoRowItem);