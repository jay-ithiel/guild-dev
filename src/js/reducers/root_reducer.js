import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import BlogReducer from './blog_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  blog: BlogReducer
});

export default RootReducer;
