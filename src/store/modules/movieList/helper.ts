import { ALL, NONE } from './constants';
import { TMovieFilterBy, TMovieSortBy, TMovieSortOrder } from './types';

/**
 * Build request url for getFilteredMovies async thunk
 * @param sortBy
 * @param sortOrder
 * @param filterBy
 * @returns api endpoint request string to get
 *          a list of movies filtered by params
 */
export const requestUrlBuilder = (
  sortBy: TMovieSortBy,
  sortOrder: TMovieSortOrder,
  filterBy: TMovieFilterBy
): string => {
  const sortByQuery = sortBy === NONE ? '' : `sortBy=${sortBy}&`;
  const sortOrderQuery = sortBy === NONE ? '' : `sortOrder=${sortOrder}`;
  const filterByQuery = filterBy === ALL ? '' : `&filter=${filterBy}`;

  return `/movies?${sortByQuery}${sortOrderQuery}${filterByQuery}`;
};
