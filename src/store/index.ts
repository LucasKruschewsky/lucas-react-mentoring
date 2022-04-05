import { configureStore } from '@reduxjs/toolkit';
import { selectedMovieReducer } from './modules/selectedMovie';
import { modalReducer } from './modules/modal';
import { movieListReducer } from './modules/movieList';

const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    currentModal: modalReducer,
    movieList: movieListReducer,
  },
});

export default store;
