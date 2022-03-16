import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '@/services/apiProvider';
import { selectedMovieReducer } from './modules/selectedMovie';
import { modalReducer } from './modules/modal';
import { movieListReducer } from './modules/movieList';

const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    currentModal: modalReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    movieList: movieListReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
