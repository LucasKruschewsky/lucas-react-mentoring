import store from '.';
import { TModalState } from './modules/modal/types';
import { ISelectMovieState } from './modules/movie/types';

export interface IStoreState {
  selectedMovie: ISelectMovieState;
  currentModal: TModalState;
}

export type TStoreDispatch = typeof store.dispatch;
