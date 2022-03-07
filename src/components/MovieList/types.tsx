import { IMoviesListData } from '@/data/MockedDataTypes';
import { Dispatch, SetStateAction } from 'react';

export interface IMovieListProps {
  setSelectedMovie: Dispatch<SetStateAction<object>>;
}

export type TSortBy = 'name' | 'year';

export interface sortedMoviesListState {
  sortedMoviesList: IMoviesListData[];
  setSortedMoviesList: Dispatch<SetStateAction<IMoviesListData[]>>;
}
