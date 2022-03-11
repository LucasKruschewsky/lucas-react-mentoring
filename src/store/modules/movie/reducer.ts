import { IStoreState } from '@/store/types';
import { SELECT_MOVIE, REMOVE_SELECTED_MOVIE } from './actions';
import { ISelectMovieActions, ISelectMovieState } from './types';

const movieInitialState: ISelectMovieState = null;

export function movieReducer(
  state = movieInitialState,
  action: ISelectMovieActions
): IStoreState['selectedMovie'] {
  switch (action.type) {
    case SELECT_MOVIE:
      return { ...action.payload };
    case REMOVE_SELECTED_MOVIE:
      return null;
    default:
      return state;
  }
}
