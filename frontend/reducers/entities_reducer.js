import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import videosReducer from './videos_reducer';
import searchReducer from './search_reducer';
import watchListReducer from './watch_list_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  searchedVideos: searchReducer,
  watchlist: watchListReducer,
});

export default entitiesReducer;