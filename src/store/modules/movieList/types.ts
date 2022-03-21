export type TMovieObject = {
  title: string;
  release_date: string;
  genres: string[];
  poster_path: string;
  vote_average: string;
  runtime: string;
  overview: string;
  id: number | '';
};
export type TMovieList = TMovieObject[];

export type TMovieListState = {
  list: TMovieList;
  status: 'success' | 'pending' | 'failed';
};

export type TMovieSortOrder = 'asc' | 'desc';
export type TMovieSortBy = 'none' | 'release_date' | 'vote_average' | 'title';

export type TMovieFilterBy =
  | 'All'
  | 'Documentary'
  | 'Comedy'
  | 'Horror'
  | 'Crime';
export type TMovieGenreFilters = TMovieFilterBy[];

export interface TGetFilteredMoviesParams {
  sortBy: TMovieSortBy;
  sortOrder: TMovieSortOrder;
  filterBy: TMovieFilterBy;
}
