import { IHomepageProps } from '@/pages/Homepage/types';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { Dispatch, SetStateAction } from 'react';

export interface IMovieListProps extends IHomepageProps {}

export interface timesSortedState {
  timesSorted: number;
  setTimesSorted: Dispatch<SetStateAction<number>>;
}

export interface sortedMoviesListState {
  sortedMoviesList: IMoviesListData[];
  setSortedMoviesList: Dispatch<SetStateAction<IMoviesListData[]>>;
}
