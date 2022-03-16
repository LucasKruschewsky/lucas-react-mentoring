import { IMoviesListData } from '@/data/MockedDataTypes';

export type TSelectedMovieState = IMoviesListData | null;

export interface ISelectedMovieAction {
  payload: IMoviesListData;
}
