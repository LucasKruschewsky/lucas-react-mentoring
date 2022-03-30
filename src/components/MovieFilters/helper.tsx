import * as React from 'react';
import {
  ALL,
  DOCUMENTARY,
  COMEDY,
  HORROR,
  CRIME,
  RELEASE_DATE,
  TITLE,
  VOTE_AVERAGE,
} from '@/store/modules/movieList/constants';
import {
  TMovieFilterBy,
  TMovieGenreFilters,
} from '@/store/modules/movieList/types';

export const genreFilterList: TMovieGenreFilters = [
  ALL,
  DOCUMENTARY,
  COMEDY,
  HORROR,
  CRIME,
];

export const sortOptionsDropdown = [
  {
    optGroupLabel: 'Select an option',
    options: [
      { value: RELEASE_DATE, label: 'Release Date' },
      { value: TITLE, label: 'A-Z' },
      { value: VOTE_AVERAGE, label: 'Rating' },
    ],
  },
  {
    optGroupLabel: 'Remove Filters',
    options: [{ value: 'remove-filters', label: 'Clear All' }],
  },
];

export const sortOptions = (): React.ReactElement[] =>
  sortOptionsDropdown.map((group) => (
    <optgroup key={group.optGroupLabel} label={group.optGroupLabel}>
      {group.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </optgroup>
  ));

/**
 * Checks if param value exists in the URLSearchParams
 * and return an object to be used by React Router Dom
 * setSearchParams function.
 * @param search
 * @param param
 * @returns Object => [param]: value or [] if value is null
 */
export const retrieveSearchParam = (
  search: URLSearchParams,
  param: string
): object => {
  if (param === 'genre') {
    return {
      [param]: search.has(param) ? search.getAll(param) : [],
    };
  }

  return {
    [param]: search.has(param) ? search.get(param) : [],
  };
};

export const matchGenreFromSearchParams = (
  searchParams: URLSearchParams,
  value: TMovieFilterBy
): boolean =>
  searchParams.get('genre')?.toLowerCase().includes(value.toLowerCase()) ||
  (searchParams.get('genre') === null && value === ALL);
