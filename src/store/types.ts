import store from '.';
import { ISelectMovieState } from './modules/movie/types';

export interface IStoreState {
  selectedMovie: ISelectMovieState;
}

export type TStoreDispatch = typeof store.dispatch;
