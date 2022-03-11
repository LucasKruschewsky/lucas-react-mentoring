import { IMoviesListData } from '@/data/MockedDataTypes';

export interface ISelectMovieActions {
  type: 'SELECT_MOVIE' | 'REMOVE_SELECTED_MOVIE';
  payload?: IMoviesListData;
}

export type ISelectMovieState = IMoviesListData | null;
