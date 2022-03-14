import { combineReducers } from 'redux';
import { movieReducer } from './movie/reducer';
import { modalReducer } from './modal/reducer';

export default combineReducers({
  selectedMovie: movieReducer,
  currentModal: modalReducer,
});
