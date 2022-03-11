import { combineReducers } from 'redux';
import { movieReducer } from './movie/reducer';

export default combineReducers({ selectedMovie: movieReducer });
