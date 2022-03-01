import * as React from 'react';
import { genreFilterList, moviesList } from '@/data/MockData';
import MovieCard from 'Components/MovieCard';

const numberOfMoviesFound = moviesList.length;

const renderMovieCards = moviesList.map((movie) => (
  <MovieCard key={movie.id} movie={movie} />
));

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

export { numberOfMoviesFound, renderMovieCards, showGenreFilters };
