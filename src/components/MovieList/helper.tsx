import * as React from 'react';
import MovieCard from 'Components/MovieCard';
import { ISetStateBoolean } from 'Global/types/globalTypes';
import { IMoviesListData } from '@/data/MockedDataTypes';
import { genreFilterList, moviesList } from '@/data/MockData';
import { timesSortedState, sortedMoviesListState } from './types';

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

const showMovies = (
  sortedMovies: IMoviesListData[],
  setIsDeleteMovieOpen: ISetStateBoolean,
  setIsEditMovieOpen: ISetStateBoolean
): React.ReactElement[] =>
  sortedMovies?.map((movie: any) => (
    <MovieCard
      setIsDeleteMovieOpen={setIsDeleteMovieOpen}
      setIsEditMovieOpen={setIsEditMovieOpen}
      key={movie.id}
      movie={movie}
    />
  ));

const sortMovies = (
  { timesSorted, setTimesSorted }: timesSortedState,
  { sortedMoviesList, setSortedMoviesList }: sortedMoviesListState
): void => {
  if (timesSorted === 0) {
    setSortedMoviesList([...sortedMoviesList].sort((a, b) => a.year - b.year));
    setTimesSorted(1);
  }

  if (timesSorted === 1) {
    setSortedMoviesList([...sortedMoviesList].sort((a, b) => b.year - a.year));
    setTimesSorted(2);
  }

  if (timesSorted === 2) {
    setSortedMoviesList(moviesList);
    setTimesSorted(0);
  }
};

export { numberOfMoviesFound, showGenreFilters, showMovies, sortMovies };
