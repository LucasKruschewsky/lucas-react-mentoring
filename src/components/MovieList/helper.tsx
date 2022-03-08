import * as React from 'react';
import MovieCard from 'Components/MovieCard';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { genreFilterList, moviesList } from '@/data/MockData';
import { sortedMoviesListState, TSortBy } from './types';

const numberOfMoviesFound = moviesList.length;

const showGenreFilters = (
  setStateFunction: React.Dispatch<React.SetStateAction<string>>,
  stateValue: string
): React.ReactNode =>
  genreFilterList.map((item) => (
    <button
      type="button"
      onClick={() => setStateFunction(item)}
      key={item}
      className={stateValue === item ? 'is-selected' : ''}
    >
      {item}
    </button>
  ));

const showMovies = (sortedMovies: IMoviesListData[]): React.ReactElement[] =>
  sortedMovies?.map((movie: IMoviesListData) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

const sortMovies = (
  sortBy: TSortBy,
  { sortedMoviesList, setSortedMoviesList }: sortedMoviesListState
): void => {
  setSortedMoviesList(
    [...sortedMoviesList].sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 0))
  );
};

const sortOptionsDropdown = [
  {
    optGroupLabel: 'Select an option',
    options: [
      { value: 'year', label: 'Release Date' },
      { value: 'name', label: 'A-Z' },
    ],
  },
  {
    optGroupLabel: 'Remove Filters',
    options: [{ value: 'remove-filters', label: 'Clear All' }],
  },
];

const sortOptions = (): React.ReactElement[] =>
  sortOptionsDropdown.map((group) => (
    <optgroup key={group.optGroupLabel} label={group.optGroupLabel}>
      {group.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </optgroup>
  ));

export {
  numberOfMoviesFound,
  showGenreFilters,
  showMovies,
  sortMovies,
  sortOptionsDropdown,
  sortOptions,
};
