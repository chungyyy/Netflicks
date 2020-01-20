import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const videosReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return merge({}, action.videos);
    case RECEIVE_VIDEO:
      newState = merge({}, state, { [action.video.id]: action.video });
      return newState;
    default:
      return state;
  }
};

export default videosReducer;