import { TMovieObject } from '../movieList/types';

export type TCurrentModalState = {
  modalType: 'add' | 'edit' | 'delete' | null;
  movieId?: TMovieObject['id'] | null;
};

export interface ICurrentModalAction {
  payload: {
    modalType: TCurrentModalState['modalType'];
    movieId?: TCurrentModalState['movieId'];
  };
}
