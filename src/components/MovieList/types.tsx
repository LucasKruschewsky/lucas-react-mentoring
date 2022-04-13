import { TMovieList } from 'Root/store/modules/movieList/types';
import { Dispatch, SetStateAction } from 'react';

export interface IMovieListProps {}

export type TSortBy = 'title' | 'release_date';

export interface sortedMoviesListState {
  moviesListApi: TMovieList;
  setSortedMoviesList: Dispatch<SetStateAction<TMovieList>>;
}
