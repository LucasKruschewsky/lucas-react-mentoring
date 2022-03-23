import * as React from 'react';
import MovieCard from 'Components/MovieCard';
import {
  TMovieGenreFilters,
  TMovieList,
} from '@/store/modules/movieList/types';
import {
  ALL,
  COMEDY,
  CRIME,
  DOCUMENTARY,
  HORROR,
  RELEASE_DATE,
  TITLE,
  VOTE_AVERAGE,
} from '@/store/modules/movieList/constants';

export const genresMap = (genres: string[]): React.ReactElement[] =>
  genres.map((genre) => <p key={genre}>{genre}</p>);

export const showMovies = (sortedMovies: TMovieList): React.ReactElement[] =>
  sortedMovies?.map((movie) => <MovieCard key={movie.id} movie={movie} />);

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

export const genreFilterList: TMovieGenreFilters = [
  ALL,
  DOCUMENTARY,
  COMEDY,
  HORROR,
  CRIME,
];
