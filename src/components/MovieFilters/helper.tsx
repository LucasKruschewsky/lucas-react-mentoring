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
} from 'Root/store/modules/movieList/constants';
import {
  TMovieFilterBy,
  TMovieGenreFilters,
} from 'Root/store/modules/movieList/types';

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

export const matchGenreFromSearchParams = (
  searchParams: URLSearchParams,
  value: TMovieFilterBy
): boolean =>
  searchParams.get('genre')?.toLowerCase().includes(value.toLowerCase()) ||
  (searchParams.get('genre') === null && value === ALL);
