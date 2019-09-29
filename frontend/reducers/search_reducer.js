import { RECEIVE_SEARCHED_VIDEOS } from '../actions/video_actions';

const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SEARCHED_VIDEOS:
      return action.videos;
    default:
      return state;
  }
}

export default searchReducer;