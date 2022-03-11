import { IMoviesListData } from '@/data/MockedDataTypes';
import { ISelectMovieActions } from './types';

export const SELECT_MOVIE = 'SELECT_MOVIE';
export const REMOVE_SELECTED_MOVIE = 'REMOVE_SELECTED_MOVIE';

export const selectMovie = (movie: IMoviesListData): ISelectMovieActions => ({
  type: SELECT_MOVIE,
  payload: movie,
});

export const removeSelectMovie = (): ISelectMovieActions => ({
  type: REMOVE_SELECTED_MOVIE,
});
