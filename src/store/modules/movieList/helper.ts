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
export const buildFilterRequestUrl = (
  sortBy: TMovieSortBy,
  sortOrder: TMovieSortOrder,
  filterBy: TMovieFilterBy
): string => {
  const sortByQuery = sortBy === NONE ? '' : `sortBy=${sortBy}&`;
  const sortOrderQuery = sortBy === NONE ? '' : `sortOrder=${sortOrder}`;
  const filterByQuery = filterBy === ALL ? '' : `&filter=${filterBy}`;

  return `/movies?${sortByQuery}${sortOrderQuery}${filterByQuery}`;
};

export const buildRequestUrlFromParams = (
  searchQuery: string,
  genreFilter: string[],
  sortBy: string,
  sortOrder: string
): string => {
  const searchQueryOutput = searchQuery
    ? `&search=${searchQuery}&searchBy=title`
    : '';

  const genreFilterOutput = genreFilter?.length
    ? genreFilter
        .filter((genre) => genre !== ALL)
        .map((genre) => `&filter=${genre}`)
        .join('')
    : '';

  const sortByOutput =
    sortBy !== NONE ? `&sortBy=${sortBy}&sortOrder=${sortOrder ?? 'desc'}` : '';

  return `/movies?${searchQueryOutput}${genreFilterOutput}${sortByOutput}`;
};
