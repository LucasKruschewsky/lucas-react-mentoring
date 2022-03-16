import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '@/services/apiProvider';
import { selectedMovieReducer } from './modules/movie';
import { modalReducer } from './modules/modal';

const store = configureStore({
  reducer: {
    selectedMovie: selectedMovieReducer,
    currentModal: modalReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export default store;
