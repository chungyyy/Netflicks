import { RECEIVE_WATCH_LIST_VIDEOS, ADD_WATCH_LIST_VIDEO, DELETE_WATCH_LIST_VIDEO } from '../actions/video_actions';
import merge from 'lodash/merge';

const watchListReducer = (state = {}, action) => {
  Object.freeze(state)
  
  switch(action.type) {
    case RECEIVE_WATCH_LIST_VIDEOS:
      return action.videos;
    case ADD_WATCH_LIST_VIDEO:
      return action.videos;
    case DELETE_WATCH_LIST_VIDEO:
      return action.videos;
    default:
      return state;
  }
}

export default watchListReducer;