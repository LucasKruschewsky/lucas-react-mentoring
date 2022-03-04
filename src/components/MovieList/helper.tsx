import * as React from 'react';
import { Dispatch, SetStateAction } from 'react';
import MovieCard from 'Components/MovieCard';
import { ISetStateBoolean } from 'Global/types/globalTypes';
import { genreFilterList, moviesList, IMoviesListData } from '@/data/MockData';

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
  timesSorted: number,
  setTimesSorted: Dispatch<SetStateAction<number>>,
  sortedMoviesList: IMoviesListData[],
  setSortedMoviesList: Dispatch<SetStateAction<IMoviesListData[]>>
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
