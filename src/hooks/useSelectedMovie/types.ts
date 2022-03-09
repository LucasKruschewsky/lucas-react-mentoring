import { IMoviesListData } from '@/data/MockedDataTypes';

export interface IUseSelectedMovieReturn {
  currentMovie: IMoviesListData;
  setSelectedMovie: (movie: IMoviesListData) => void;
  removeSelectedMovie: () => void;
}

export type IUseSelectedMovieState = IMoviesListData;

export interface IUseSelectedMovieActions {
  type: 'SELECT_MOVIE' | 'REMOVE_SELECTED_MOVIE';
  payload?: IMoviesListData;
}
