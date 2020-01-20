import * as video_util from "../util/video_util";

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const RECEIVE_SEARCHED_VIDEOS = "RECEIVE_SEARCHED_VIDEOS";
export const CLEAR_SEARCHED_VIDEOS = "CLEAR_SEARCHED_VIDEOS";

export const RECEIVE_WATCH_LIST_VIDEOS = "RECEIVE_WATCH_LIST_VIDEOS";
export const ADD_WATCH_LIST_VIDEO = "ADD_WATCH_LIST_VIDEO";
export const DELETE_WATCH_LIST_VIDEO = "DELETE_WATCH_LIST_VIDEO";

// VIDEOS
// VIDEOS
// VIDEOS

export const fetchAllVideos = () => dispatch => {
  return video_util
    .fetchVideos()
    .then(videos => dispatch(receiveVideos(videos)));
};

export const fetchVideo = id => dispatch => {
  return video_util.fetchVideo(id).then(video => dispatch(receiveVideo(video)));
};

export const fetchSearchedVideos = query => dispatch => {
  return video_util
    .fetchSearchedVideos(query)
    .then(videos => dispatch(receiveSearchedVideos(videos)));
};

export const receiveVideos = videos => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos
  };
};

export const receiveVideo = video => {
  return {
    type: RECEIVE_VIDEO,
    video
  };
};

export const receiveSearchedVideos = videos => {
  return {
    type: RECEIVE_SEARCHED_VIDEOS,
    videos
  };
};

export const clearSearchedVideos = () => {
  return {
    type: CLEAR_SEARCHED_VIDEOS
  };
};

// WATCHLIST VIDEOS
// WATCHLIST VIDEOS
// WATCHLIST VIDEOS

export const fetchWatchListVideos = () => dispatch => {
  return video_util
    .fetchWatchListVideos()
    .then(videos => dispatch(receiveWatchListVideos(videos)));
};

export const addWatchListVideo = id => dispatch => {
  return video_util
    .addWatchListVideo(id)
    .then(videos => dispatch(addToList(videos)));
};

export const deleteWatchListVideo = id => dispatch => {
  return video_util
    .deleteWatchListVideo(id)
    .then(videos => dispatch(deleteFromList(videos)));
};

export const receiveWatchListVideos = videos => {
  return {
    type: RECEIVE_WATCH_LIST_VIDEOS,
    videos
  };
};

export const addToList = videos => {
  return {
    type: ADD_WATCH_LIST_VIDEO,
    videos
  };
};

export const deleteFromList = videos => {
  return {
    type: DELETE_WATCH_LIST_VIDEO,
    videos
  };
};
