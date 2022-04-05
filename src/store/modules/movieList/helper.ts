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
  const sortByQuery = sortBy === 'none' ? '' : `sortBy=${sortBy}&`;
  const sortOrderQuery = sortBy === 'none' ? '' : `sortOrder=${sortOrder}`;
  const filterByQuery = filterBy === 'All' ? '' : `&filter=${filterBy}`;

  return `/movies?${sortByQuery}${sortOrderQuery}${filterByQuery}`;
};
