import { combineReducers } from 'redux';
import sessionErrorsReducer from './users_reducer';

const entitiesReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default entitiesReducer;