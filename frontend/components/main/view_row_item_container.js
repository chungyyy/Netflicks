import { connect } from "react-redux";
import VideoRowItem from "./video_row_item";
import {
  addWatchListVideo,
  deleteWatchListVideo,
  fetchWatchListVideos
} from "../../actions/video_actions";

const msp = (state, ownProps) => {
  const watchlistArrayIds = [];
  const videos = Object.values(state.entities.videos);
  const watchlist = Object.values(state.entities.watchlist);
  watchlist.map((video) => watchlistArrayIds.push(video.id))

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
  }

  return {
    videos,
    watchmenId,
    watchlist,
    watchmenVideo,
    watchlistArrayIds,
    watchmenVideoClip
  };
};

const mdp = dispatch => {
  return {
    addWatchListVideo: (id) => dispatch(addWatchListVideo(id)),
    deleteWatchListVideo: (id) => dispatch(deleteWatchListVideo(id)),
    fetchWatchListVideos: () => dispatch(fetchWatchListVideos()),
  };
};

export default connect(msp, mdp)(VideoRowItem);
