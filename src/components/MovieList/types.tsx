import { IMoviesListData } from '@/data/MockedDataTypes';
import { Dispatch, SetStateAction } from 'react';

export interface IMovieListProps {}

export type TSortBy = 'title' | 'release_date';

export interface sortedMoviesListState {
  moviesListApi: IMoviesListData[];
  setSortedMoviesList: Dispatch<SetStateAction<IMoviesListData[]>>;
}
