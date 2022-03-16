import * as React from 'react';
import MovieCard from 'Components/MovieCard';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { genreFilterList } from '@/data/MockData';
import { sortedMoviesListState, TSortBy } from './types';

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

const genresMap = (genres: string[]): React.ReactElement[] =>
  genres.map((genre) => <p key={genre}>{genre}</p>);

const showMovies = (sortedMovies: IMoviesListData[]): React.ReactElement[] =>
  sortedMovies?.map((movie: IMoviesListData) => (
    <MovieCard key={movie.id} movie={movie} />
  ));

const sortMovies = (
  sortBy: TSortBy,
  { moviesListApi, setSortedMoviesList }: sortedMoviesListState
): void => {
  setSortedMoviesList(
    [...moviesListApi].sort((a, b) => (a[sortBy] < b[sortBy] ? -1 : 0))
  );
};

const sortOptionsDropdown = [
  {
    optGroupLabel: 'Select an option',
    options: [
      { value: 'release_date', label: 'Release Date' },
      { value: 'title', label: 'A-Z' },
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
  genresMap,
  showGenreFilters,
  showMovies,
  sortMovies,
  sortOptionsDropdown,
  sortOptions,
};
