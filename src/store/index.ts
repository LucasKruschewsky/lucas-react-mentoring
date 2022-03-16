import { configureStore } from '@reduxjs/toolkit';
import { selectedMovieReducer } from './modules/movie';
import { modalReducer } from './modules/modal';

const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    currentModal: modalReducer,
  },
});

export default store;
