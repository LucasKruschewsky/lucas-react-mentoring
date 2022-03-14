import { IMoviesListData } from '@/data/MockedDataTypes';
import { IUseSelectedMovieActions, IUseSelectedMovieState } from './types';

export const SELECT_MOVIE = 'SELECT_MOVIE';
export const REMOVE_SELECTED_MOVIE = 'REMOVE_SELECTED_MOVIE';

export function selectedMovieReducer(
  state: IUseSelectedMovieState,
  action: IUseSelectedMovieActions
): IMoviesListData {
  switch (action.type) {
    case SELECT_MOVIE:
      return { ...state, ...action.payload };
    case REMOVE_SELECTED_MOVIE:
      return null;
    default:
      return state;
  }
}
