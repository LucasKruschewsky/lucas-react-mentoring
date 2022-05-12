import { configureStore, EnhancedStore } from '@reduxjs/toolkit';
import { selectedMovieReducer } from './modules/selectedMovie';
import { modalReducer } from './modules/modal';
import { movieListReducer } from './modules/movieList';
import { TMovieListState, TMovieObject } from './modules/movieList/types';
import { TCurrentModalState } from './modules/modal/types';

export const createStore = (): EnhancedStore<
  {
    selectedMovie: TMovieObject;
    currentModal: TCurrentModalState;
    movieList: TMovieListState;
  },
  any,
  [any]
> =>
  configureStore({
    reducer: {
      selectedMovie: selectedMovieReducer,
      currentModal: modalReducer,
      movieList: movieListReducer,
    },
  });

const store = createStore();

export default store;
