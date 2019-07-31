import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';

const entitiesReducer = combineReducers({
  session: sessionErrorsReducer,
});

export default entitiesReducer;