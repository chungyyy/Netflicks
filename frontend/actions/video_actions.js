import * as video_util from '../util/video_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const fetchAllVideos = () => dispatch => {
  return video_util.fetchVideos().
    then(videos => dispatch(receiveVideos(videos)));
};

export const fetchVideo = (id) => dispatch => {
  return video_util.fetchVideo(id).
    then(video => dispatch(receiveVideo(video)));
};

const receiveVideos = (videos) => {
  return {
    type: RECEIVE_ALL_VIDEOS,
    videos,
  };
};

const receiveVideo = (video) => {
  return {
    type: RECEIVE_VIDEO,
    video,
  };
};