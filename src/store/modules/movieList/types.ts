export type TMovieObject = {
  title: string;
  release_date: string;
  genres: string[];
  poster_path: string;
  vote_average: number;
  runtime: number;
  overview: string;
  id?: number;
  tagline?: string;
  vote_count?: number;
  budget?: number;
  revenue?: number;
};

export type TMovieList = TMovieObject[];

export type TMovieSortOrder = 'asc' | 'desc';
export type TMovieSortBy = 'none' | 'release_date' | 'vote_average' | 'title';

export type TMovieFilterBy =
  | 'All'
  | 'Documentary'
  | 'Comedy'
  | 'Horror'
  | 'Crime';
export type TMovieGenreFilters = TMovieFilterBy[];

export type TMovieListState = {
  list: TMovieList;
  numberOfMoviesFound: number;
  status: 'success' | 'pending' | 'failed';
};

export interface TGetFilteredMoviesParams {
  sortBy: TMovieSortBy;
  sortOrder: TMovieSortOrder;
  filterBy: TMovieFilterBy;
}

export interface IMovieListAction {
  payload: {
    sortBy?: TMovieSortBy;
    sortOrder?: TMovieSortOrder;
    filterBy?: TMovieFilterBy;
  };
  type: string;
}

export interface IMovieListPayload {
  sortBy?: TMovieSortBy;
  sortOrder?: TMovieSortOrder;
  filterBy?: TMovieFilterBy;
}
