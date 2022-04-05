import { TMovieObject } from '../movieList/types';

export type TSelectedMovieState = TMovieObject | null;

export interface ISelectedMovieAction {
  payload: TMovieObject;
}
