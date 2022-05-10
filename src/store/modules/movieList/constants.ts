import { TMovieListState } from './types';

// Sort order
export const DESC = 'desc';
export const ASC = 'asc';

// Sort by
export const NONE = 'none';
export const RELEASE_DATE = 'release_date';
export const VOTE_AVERAGE = 'vote_average';
export const TITLE = 'title';

// Filter by
export const ALL = 'All';
export const DOCUMENTARY = 'Documentary';
export const COMEDY = 'Comedy';
export const HORROR = 'Horror';
export const CRIME = 'Crime';

// Initial State
export const movieListInitialState: TMovieListState = {
  list: [],
  numberOfMoviesFound: null,
  status: null,
};
