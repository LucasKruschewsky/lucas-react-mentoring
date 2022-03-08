import { IMoviesListData } from '@/data/MockedDataTypes';
import { Dispatch, SetStateAction } from 'react';

export interface IMovieListProps {}

export interface timesSortedState {
  timesSorted: number;
  setTimesSorted: Dispatch<SetStateAction<number>>;
}

export type TSortBy = 'name' | 'year';

export interface sortedMoviesListState {
  sortedMoviesList: IMoviesListData[];
  setSortedMoviesList: Dispatch<SetStateAction<IMoviesListData[]>>;
}
